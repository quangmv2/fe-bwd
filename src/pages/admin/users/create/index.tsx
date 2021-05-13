import { Form, Input, Modal } from 'antd';
import React, { forwardRef, useCallback, useImperativeHandle, useState } from 'react';
import styles from "./styles.module.scss";

interface AdminUsersPageProps {

}

export interface RefFormUser {
  handleOpen: () => void
}

const AdminUsersPage = forwardRef<RefFormUser, AdminUsersPageProps>(({

}, ref) => {

  const [showModal, setShowModal] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    handleOpen
  }))

  const handleOpen = useCallback(() => {
    setShowModal(true);
  }, [])

  const handleClose = useCallback(() => {
    setShowModal(false);
  }, [])

  return (
    <div>
      <Modal
        centered
        visible={showModal}
        onCancel={handleClose}
        onOk={handleClose}
        okText="Lưu"
        cancelText="Đóng"
        title={"Thêm mới người dùng"}
      >
        <Form
          name="form-create"
        >
          <Form.Item
            label="name"
            name="username"
          >
            <Input placeholder="Vui lòng nhập họ và tên" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
})

export default AdminUsersPage;