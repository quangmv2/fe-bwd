import Icon, { SearchOutlined, StepForwardOutlined } from '@ant-design/icons';
import { Button, Col, Input, Pagination, Row, Space, Table, TableProps, Tooltip, } from 'antd';
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useReducer, useRef, useState } from 'react';
import { GridApi } from './api';
import { reducer } from './function';
import "./index.scss"
import { ColumnDef, GridProps, GridRefType, IPaginate, IStateGrid, IStateGridInput } from './interface';
import Highlighter from 'react-highlight-words';

type Props<T> = GridProps<T> & TableProps<any>

const Grid = forwardRef<GridRefType, Props<any>>(({ 
    className,
    onGridReady,
    headerDefs = [],
    typeRender = "clientSide",
    paginate,
    dataSource = [],
    bordered = true,
    columns,
    ...props
}, ref) => {

    const [api] = useState<GridApi>(new GridApi());
    const [state, setState] = useReducer<(prevState: IStateGridInput, currentState: IStateGridInput) => IStateGrid>(reducer, {
        dataGrid: [],
        loading: false,
        selectedRows: [],
        selectedRowKeys: [],
        searchText: '',
        searchedColumn: null,
    })

    const [statePaginate, setStatePaginate] = useReducer<(prevState: IPaginate, currentState: IPaginate) => IPaginate>(reducer, {
        currentPage: 1,
        sizePage: 10,
        totalPages: 1,
        totalRows: 1
    })

    const searchInput = useRef(null)

    useEffect(() => {
        if (typeRender !== "clientSide") return;
        setStatePaginate({
            totalRows: dataSource.length
        })
    }, [dataSource, typeRender])

    useEffect(() => {
        onGridReady({
            api,
            grid: {
                state,
            }
        })
        api.setState = setState
    }, [])

    useEffect(() => {
        api.typeRender = typeRender
    }, [typeRender])

    useEffect(() => {
        api.getState = () => state
    }, [state])

    useImperativeHandle(ref, () => ({
        api,
    }))

    const onSelectNone = useCallback(() => {
        setState({
            selectedRows: []
        })
    }, [])

    const changePage = (page, pageSize) => {
        setStatePaginate({
            currentPage: page,
            sizePage: pageSize
        })
    }


    const getColumnSearchProps = (dataIndex: string) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                      ref={node => {
                        searchInput.current = node;
                      }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
              </Button>
                    <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
              </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setState({
                                searchText: selectedKeys[0],
                                searchedColumn: dataIndex,
                            });
                        }}
                    >
                        Filter
              </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => searchInput?.current?.select(), 100);
            }
        },
        render: text =>
            state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                    text
                ),
    });

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    const handleReset = clearFilters => {
        clearFilters();
        setState({ searchText: '' });
    };

    return (
        <Row className={`qt-grid-custom ${className}`}>
            <Row className="qt-grid-header" >
                <Col>
                    {
                        typeRender === "clientSide" ? (
                            <Pagination
                                showSizeChanger
                                defaultCurrent={1}
                                total={statePaginate.totalRows}
                                hideOnSinglePage={false}
                                pageSizeOptions={["10", "25", "50", "100"]}
                                onChange={changePage}
                                size="small"
                            />
                        ) : (
                                <Pagination
                                    showSizeChanger
                                    // onShowSizeChange={onShowSizeChange}
                                    defaultCurrent={3}
                                    total={50}
                                    hideOnSinglePage={false}
                                    size="small"
                                />
                            )
                    }
                </Col>
                <Col className="qt-grid-header-action">
                    {
                        headerDefs.map((header, index) => (
                            <Tooltip title={header.label} key={index} >

                                <Button className="qt-grid-header-button"
                                    disabled={header.option === "default" ? false :
                                        (header.option === "single" && state.selectedRows.length === 1 ? false : (
                                            header.option === "muliti" && state.selectedRows.length > 0 ? false : true
                                        ))
                                    }
                                    onClick={() => header.onCLick({
                                        api,
                                        grid: {
                                            state,
                                            selectedRows: []
                                        }
                                    })}
                                >
                                    {
                                        typeof header.icon === "string" ? (
                                            <></>
                                        ) : header.icon
                                    }
                                </Button>
                            </Tooltip>
                        ))
                    }
                </Col>
            </Row>
            <Table
                style={
                    bordered ? { border: "1px solid #fcfcfc" } : {}
                }
                onChange={(panigation, filter, sort) => {
                    if (typeRender !== "serverSide") return
                    console.log(panigation, filter, sort);
                }}
                dataSource={typeRender === "clientSide" ? dataSource : state.dataGrid}
                pagination={{
                    style: { height: 0, display: 'none' },
                    pageSize: statePaginate.sizePage,
                    current: statePaginate.currentPage
                }}
                bordered={true}
                scroll={{
                    y: "100%",
                    x: "calc(100vw - 310px)"
                }}
                columns={columns.map(d => {
                    if (d.filters || d['noFilter']) return d;
                    return {
                        ...getColumnSearchProps(d['dataIndex']),
                        ...d,
                    }
                })}
                rowSelection={{
                    type: "checkbox",
                    hideSelectAll: typeRender === "serverSide",
                    onSelectNone,
                    selectedRowKeys: state.selectedRowKeys,
                    onChange: (selectRowsKeys, selectedRows) => {
                        setState({
                            selectedRows: selectedRows,
                            selectedRowKeys: selectRowsKeys
                        })
                    }
                }}
                {...props}
            />
        </Row>
    );
})

export default Grid;