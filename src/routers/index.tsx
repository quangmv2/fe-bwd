import { appPermisions } from "@constants"
import { IMenuRouter, IRouter } from "@type"

const routersNotAuth: IRouter[] = [
    {
        exact: true,
        path: '/landing-page',
        component: 'landing-page'
    },
    {
        exact: true,
        path: '/login',
        component: 'login',
        noHeader: true
    },
    {
        exact: true,
        path: '/register',
        component: 'register',
        noHeader: true
    },
    {
        exact: true,
        path: '/',
        component: 'landing-page'
    },
    {
        exact: true,
        path: "*",
        component: '404',
        noHeader: true
    },
]
const routersAuth: IRouter[] = [
    {
        exact: true,
        path: '/',
        component: 'admin/home'
    },
    {
        exact: true,
        path: '/users',
        component: 'admin/users'
    },
    {
        exact: true,
        path: '/users/create',
        component: 'admin/users/create'
    },
    {
        exact: true,
        path: '/users/edit',
        component: 'admin/users/edit'
    },
    {
        exact: true,
        path: '/conferences',
        component: 'admin/conferences'
    },
    {
        exact: true,
        path: '/conferences/active',
        component: 'admin/conferences/active'
    },
    {
        exact: true,
        path: '/conferences/create',
        component: 'admin/conferences/create'
    },
    {
        exact: true,
        path: '/conferences/edit',
        component: 'admin/conferences/edit'
    },
]

const menuRouters: IMenuRouter[] = [
        {
            title: "Dashboard",
            type: "link",
            dest: "/admin/",
            permissions: []
        },
        {
            title: 'Tài khoản',
            type: "navigation",
            dest: "/admin/users",
            permissions: [appPermisions.USER_LIST, appPermisions.USER_CREATE, appPermisions.USER_EDIT],
            childs: [
                {
                    title: 'Danh sách tài khoản',
                    type: "sub_navigation",
                    dest: "/admin/users",
                    icon: "",
                    permission: appPermisions.USER_LIST,
                },
                {
                    title: 'Thêm tài khoản',
                    type: "sub_navigation",
                    dest: "/admin/users/create",
                    icon: "",
                    permission: appPermisions.USER_CREATE,
                },
                {
                    title: 'Sửa tài khoản',
                    type: "sub_navigation",
                    dest: "/admin/users/edit",
                    icon: "",
                    permission: appPermisions.USER_EDIT,
                }
            ]
        },
        {
            title: 'Phòng họp',
            type: "navigation",
            dest: "/admin/conferences",
            permissions: ["ACTIVE_CONFERENCE", "LIST_CONFERENCE", "CREATE_CONFERENCE", "EDIT_CONFERENCE"],
            childs: [
                {
                    title: 'Phòng họp đang hoạt động',
                    type: "sub_navigation",
                    dest: "/admin/conferences/active",
                    icon: "",
                    permission: "ACTIVE_CONFERENCE",
                },
                {
                    title: 'Danh sách phòng họp',
                    type: "sub_navigation",
                    dest: "/admin/conferences",
                    icon: "",
                    permission: "LIST_CONFERENCE",
                },
                {
                    title: 'Thêm phòng họp',
                    type: "sub_navigation",
                    dest: "/admin/conferences/create",
                    icon: "",
                    permission: "CREATE_CONFERENCE",
                },
                {
                    title: 'Sửa phòng họp',
                    type: "sub_navigation",
                    dest: "/admin/conferences/edit",
                    icon: "",
                    permission: "EDIT_CONFERENCE",
                }
            ]
        },
        // {
        //     title: "Logout",
        //     type: "link",
        //     dest: "",
        //     permission: "LOGOUT"
        // }
    ]

export {
    routersNotAuth,
    routersAuth,
    menuRouters
}