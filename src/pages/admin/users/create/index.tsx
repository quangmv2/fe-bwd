import { Checkbox, Form, Input, Modal } from 'antd';
import React, { forwardRef, useCallback, useImperativeHandle, useState } from 'react';
import { arrFI } from './common';
import { patternRule } from '@common'
import { useForm } from 'antd/lib/form/Form';
import { mutateData } from 'src/tools/apollo/func';
import { CREATE_USER } from 'src/graphql/admin.user';
import { ApolloError } from '@apollo/client';
// import styles from "./styles.module.scss";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

interface AdminUsersPageProps {
    reload?: Function
}

export interface RefFormUser {
    handleOpen: (row?: any) => void
}

const AdminUsersPage = forwardRef<RefFormUser, AdminUsersPageProps>(({
    reload
}, ref) => {

    const [selectRow, setSelectRow] = useState<any>(null);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [form] = useForm()

    useImperativeHandle(ref, () => ({
        handleOpen
    }))

    const handleOpen = useCallback((row?: any) => {
        console.log(row);

        if (row) {
            setSelectRow(row)
            form.setFieldsValue(row)
            setShowModal(true);
            return
        }
        form.resetFields()
        setShowModal(true);
    }, [form])

    const handleClose = useCallback(() => {
        setShowModal(false);
    }, [])

    const handleSubmit = useCallback(() => {
        form.validateFields().then(values => {
            submit(values)
        })
    }, [form])

    const submit = useCallback((values: any) => {
        mutateData(CREATE_USER, {
            input: values
        }).then(({ data, errors }) => {
            reload && reload()
            handleClose()
            form.resetFields()
        }).catch((err: ApolloError) => {
            if (err.message.includes("username is exists")) {
                form.setFields([{
                    name: "username",
                    errors: ["Tài khoản đăng nhập đã tồn tại"]
                }])
            }
            console.log(err);
        })
    }, [form])

    return (
        <div>
            <Modal
                centered
                visible={showModal}
                onCancel={handleClose}
                onOk={handleSubmit}
                okText="Lưu"
                cancelText="Đóng"
                title={"Thêm mới người dùng"}
            >
                <Form
                    {...layout}
                    name="form-create"
                    form={form}
                >
                    {arrFI.map((FI, key) => {

                        if (FI.type === "checkbox") {
                            return (
                                <Form.Item
                                    key={key}
                                    label={FI.label}
                                    name={FI.name}
                                    valuePropName='checked'
                                    initialValue={false}
                                    rules={FI.require ? [patternRule.required(`${FI.label} Là bắt buộc`)] : []}
                                >
                                    <Checkbox data-ci='block' defaultChecked={false} />
                                </Form.Item>
                            )
                        }
                        if (FI.name === 'password') {
                            <Form.Item
                                key={key}
                                label={FI.label}
                                name={FI.name}
                                rules={FI.require ? [patternRule.required(`${FI.label} Là bắt buộc`)] : []}
                            >
                                <Input.Password placeholder={`Nhập ${FI.label?.toLowerCase()}`} />
                            </Form.Item>
                        }
                        return (
                            <Form.Item
                                key={key}
                                label={FI.label}
                                name={FI.name}
                                rules={FI.require ? [patternRule.required(`${FI.label} Là bắt buộc`)] : []}

                            >
                                <Input
                                    placeholder={`Nhập ${FI.label?.toLowerCase()}`}
                                />
                            </Form.Item>
                        )
                    })}
                </Form>
            </Modal>
        </div>
    );
})

export default AdminUsersPage;