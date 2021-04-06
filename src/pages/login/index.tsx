import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from "./styles.module.scss";
import "./index.css"
import { Form, Input, Button } from 'antd';
import { useAuth } from '@store';
import { ACCESS_TOKEN, appPermisions } from '@constants';
import { ButtonComponent } from '@components';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface LoginPageProps {

}

const LoginPage: React.FC<LoginPageProps> = () => {

  const { isAuth, setAuthencation } = useAuth();
  const history = useHistory()

  useEffect(() => {
    if (isAuth) history.replace("/");
  }, [isAuth]);

  const onFinish = (values: any) => {
    console.log('Success:', values);
    setAuthencation(true, {
      username: "vanquang312",
      permissions: [
        // appPermisions.ADMIN_PAGE,
        // appPermisions.DASHBOARD_PAGE,
        // ...Object.keys(appPermisions)
        ...Object.values(appPermisions)
      ],
      fullname: "Mai Văn Quang",
      email: "maiquang1470@gmail.com",
      role: "ADMIN",

    });
    localStorage.setItem(ACCESS_TOKEN, "231231320");
    history.push('/admin')
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginForm}>
        <Link to="/"><h1>Login Page</h1></Link>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            // label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input className={styles.input}/>
          </Form.Item>

          <Form.Item
            // label="Password"
            name="password"
            className={styles.input}
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password className={styles.input} />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <ButtonComponent style={{ width: "100%" }} onPress={onFinish}>
              Login
            </ButtonComponent>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;

{/* <Link to="/"><h1>Login Page</h1></Link>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>
      </Form> */}