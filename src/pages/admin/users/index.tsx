import React, { useRef, useState, useEffect, useMemo } from 'react';
import styles from "./styles.module.scss";
import { mutateData, queryData } from 'src/tools/apollo/func';
import { USERS } from "src/graphql/query";
import { Checkbox, notification } from 'antd';
import Grid from 'src/components/grid';
import { ColumnDef, GridOption, IDatasource, IGridApi, IHeaderDef } from 'src/components/grid/interface';
import { EditOutlined, PlusOutlined, DeleteOutlined, ReloadOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import ModalForm, { RefFormUser } from "./create";
import confirm from 'antd/lib/modal/confirm';
import { useAuth } from '@context';
import { appPermisions } from '@constants';
import { checkPermission } from '@common';
import { REMOVE_USERS } from 'src/graphql/admin.user';


const columns: ColumnDef<any> = [
  {
    title: 'Tài khoản',
    dataIndex: 'username',
    key: 'username',
    fixed: 'left',
    sorter: (a, b) => a.username.length - b.username.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Họ và tên',
    dataIndex: 'fullName',
    key: 'fullName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Chức vụ',
    dataIndex: 'role',
    key: 'role',
    render: row => row?.description,
    noFilter: true
  },
  {
    title: "Kích hoạt",
    dataIndex: "isActive",
    key: "isActive",
    render: row => <Checkbox defaultChecked={row} />,
    filters: [
      { text: 'Khóa', value: true },
      { text: 'Bình thường', value: false },
    ],
    width: 100,
    align: "center",
    onFilter: (value, record) => record['isActive'] === value
  },
  {
    title: "Khóa",
    dataIndex: "isLocked",
    key: "isLocked",
    render: row => <Checkbox defaultChecked={row} />,
    filters: [
      { text: 'Khóa', value: true },
      { text: 'Bình thường', value: false },
    ],
    width: 100,
    align: "center",
    onFilter: (value, record) => record['isLocked'] === value
  }, 
  {
    key: "action",
    width: 100,
    render: row => {
      return (
        <DeleteOutlined />
      )
    },
    noFilter: true
  }
];

interface AdminUsersPageProps {
}

const AdminUsersPage: React.FC<AdminUsersPageProps> = ({
}) => {

  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const gridApi = useRef<IGridApi>(null)
  const modalRef = useRef<RefFormUser>(null)
  const [random, setRandom] = useState<number>(0);
  const { user } = useAuth()

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    console.log("random change");
  }, [random])

  const loadData = () => {
    setLoading(true)
    queryData(USERS).then(data => {
      setUsers(data?.data?.users || [])
    }).catch(() => {}).finally(() => setLoading(false))
  }

  const loadDatasource = (page, pageSize): IDatasource => ({
    loadRow: (opt) => {
      opt.success([`${Math.random()}`])
    }
  })

  const load = () => {
    gridApi?.current?.setDataSource(loadDatasource(1, 0))
  }

  const headerDefs: IHeaderDef[] = useMemo(() => (
    [
      {
        label: "Làm mới",
        icon: <ReloadOutlined />,
        option: "default",
        onCLick: (gridOption: GridOption) => {
          gridOption.api.refetch()
          loadData()
        }
      },
      {
        label: "Thêm mới",
        icon: <PlusOutlined />,
        option: "default",
        onCLick: () => {
          modalRef?.current?.handleOpen();
        },
        hidden: !checkPermission(user?.permissions || [], appPermisions.USER_CREATE)
      },
      {
        label: "Cập nhật",
        icon: <EditOutlined />,
        option: "single",
        onCLick: (gridOption: GridOption) => {
          modalRef?.current?.handleOpen(gridOption.grid.selectedRows[0] || null);
        },
        hidden: !checkPermission(user?.permissions || [], appPermisions.USER_EDIT)
      },
      {
        label: "Xóa",
        icon: <DeleteOutlined />,
        option: "muliti",
        onCLick: (gridOption: GridOption) => {
          // console.log(gridOption.grid.state.selectedRows);
          showConfirm(gridOption.grid.state.selectedRows)
        },
        hidden: !checkPermission(user?.permissions || [], appPermisions.USER_DELETE)
      }
    ]
  ), [])

  const showConfirm = (rows: any[]) => {
    confirm({
      title: 'Do you Want to delete these items?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      onOk() {
        deleteMore(rows?.map(r => r?._id))
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  const deleteMore = (ids: string[]) => {
    mutateData(REMOVE_USERS, {
      ids
    }).then(() => {
      notification.success({
        message: "Xóa thành công!",
      })
      gridApi.current.unSelectRows(ids)
      loadData()
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className={styles.container}>
      <h1>Danh mục tài khoản</h1>
      <Grid
        bordered
        onGridReady={(option) => {
          gridApi.current = option.api
          console.log("load grid");
          option.api.setDataSource(loadDatasource(0, 1))
        }}
        loading={loading}
        headerDefs={headerDefs}
        dataSource={users}
        columns={columns}
        rowKey={row => row?._id}
        className={styles['grid-height']}
      />
      <ModalForm
        ref={modalRef}
        reload={loadData}
      />
    </div>
  );

}

export default AdminUsersPage;