import React, { useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Form, Input, notification, Button } from 'antd';
import { useAuth } from '@context';
import { ACCESS_TOKEN, appPermisions, PREV_ROUTER } from '@constants';
import { ApolloError, gql, useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { useForm } from 'antd/lib/form/Form';
import { GraphQLError } from 'graphql';
import { mutateData, queryData } from 'src/tools/apollo/func';
import { LOGIN } from 'src/graphql/mutation';
import { ME } from 'src/graphql/query';
import styles from "./styles.module.scss";
import "./index.css"

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

  const { isAuth, dispatchAuth } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const [form] = useForm()


  useEffect(() => {
    return () => localStorage.removeItem(PREV_ROUTER);
  }, [])

  useEffect(() => {
    if (isAuth) history.replace("/");
  }, [isAuth, history]);

  const onFinish = (values: any) => {
    // mutateData(LOGIN, {
    //   info: values
    // }).then(async ({ data, errors }) => {
    //   if (errors || !data?.login?.token) {
    //     notification.error({
    //       message: "Đăng nhập thất bại",
    //     })
    //     return;
    //   }
    //   localStorage.setItem(ACCESS_TOKEN, data?.login?.token)
    //   const me = await fetchMe();
    //   console.log(me);
    //   if (!me) throw new Error();
    //   dispatchAuth({
    //     type: "SET_AUTHEN",
    //     payload: {
    //       user: me,
    //       isAuth: true
    //     }
    //   });
    //   notification.success({
    //     message: "Đăng nhập thành công",
    //   })
    // }).catch((error: ApolloError) => {
    //   console.log(error.graphQLErrors);
    //   error?.graphQLErrors.forEach(err => {
    //     notification.error({
    //       message: err?.message
    //     })
    //   })
    // })
    // return;
    localStorage.setItem(ACCESS_TOKEN, "token")
    // const me = await fetchMe();
    // console.log(me);
    const me: any = {
      _id: "6084f501e817a7502ea9bb93",
      username: "appadmin",
      email: "admin@gmail.com",
      role: {
        _id: "6084f501e817a7502ea9bb90",
        code: "APP_SUPERADMIN",
        description: "Người quản trị hệ thống"
      },
      permissions: [
        "APP_ADMIN_PAGE",
        "APP_USER_VIEW",
        "APP_USER_CREATE",
        "APP_USER_EDIT",
        "APP_USER_DELETE",
        "APP_PERMISSION_VIEW",
        "APP_ROLE_CREATE",
        "APP_ROLE_EDIT",
        "APP_ROLE_VIEW"
      ],
      createdAt: 1619326209272,
      createdBy: null
    }
  if (!me) throw new Error();
  dispatchAuth({
    type: "SET_AUTHEN",
    payload: {
      user: me,
      isAuth: true
    }
  });
};

const fetchMe = async () => {
  try {
    const { data, errors } = await queryData(ME);
    if (errors) return null;
    return data.me;
  } catch (error) {
    console.log(error?.graphQLErrors);
  }
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};


return (
  <div className={styles.container}>
    <div className={styles.loginForm}>
      <Link to="/"><h1>Login Page</h1></Link>
      <Form
        // {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
      >
        <Form.Item
          // label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input  />
        </Form.Item>

        <Form.Item
          // label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password  />
        </Form.Item>

        <Form.Item>
          <Button htmlType='submit' type="primary" className="w-100 h-100 login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
);
}

export default LoginPage;