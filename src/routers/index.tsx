const routersNotAuth = [
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
        path: '/home',
        component: 'user',
        noHeader: true
    },
    // {
    //     exact: true,
    //     path: '/',
    //     component: 'landing-page'
    // },
    // {
    //     exact: true,
    //     path: "*",
    //     component: '404',
    //     noHeader: true
    // },
]
const routersAuth = [
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

const menuRouters = [
    {
        title: "Dashboard",
        type: "link",
        dest: "/admin/",
        code: "DASHBOARD"
    },
    {
        title: 'Tài khoản',
        type: "navigation",
        dest: "/admin/users",
        code: "USERS",
        childs: [
            {
                title: 'Danh sách tài khoản',
                type: "sub_navigation",
                dest: "/admin/users",
                icon: "",
                code: "LIST_USER",
            },
            {
                title: 'Thêm tài khoản',
                type: "sub_navigation",
                dest: "/admin/users/create",
                icon: "",
                code: "CREATE_USER",
            },
            {
                title: 'Sửa tài khoản',
                type: "sub_navigation",
                dest: "/admin/users/edit",
                icon: "",
                code: "EDIT_USER",
            }
        ]
    },
    {
        title: 'Phòng họp',
        type: "navigation",
        dest: "/admin/conferences",
        code: "CONFERENCE",
        childs: [
            {
                title: 'Phòng họp đang hoạt động',
                type: "sub_navigation",
                dest: "/admin/conferences/active",
                icon: "",
                code: "ACTIVE_CONFERENCE",
            },
            {
                title: 'Danh sách phòng họp',
                type: "sub_navigation",
                dest: "/admin/conferences",
                icon: "",
                code: "LIST_CONFERENCE",
            },
            {
                title: 'Thêm phòng họp',
                type: "sub_navigation",
                dest: "/admin/conferences/create",
                icon: "",
                code: "CREATE_CONFERENCE",
            },
            {
                title: 'Sửa phòng họp',
                type: "sub_navigation",
                dest: "/admin/conferences/edit",
                icon: "",
                code: "EDIT_CONFERENCE",
            }
        ]
    },
    // {
    //     title: "Logout",
    //     type: "link",
    //     dest: "",
    //     code: "LOGOUT"
    // }
]
const menuUserRouters = [
    {
        title: "Dashboard",
        type: "link",
        dest: "/admin/",
        code: "DASHBOARD"
    },
    {
        title: 'Tài khoản',
        type: "navigation",
        dest: "/admin/users",
        code: "USERS",
        childs: [
            {
                title: 'Danh sách tài khoản',
                type: "sub_navigation",
                dest: "/admin/users",
                icon: "",
                code: "LIST_USER",
            },
            {
                title: 'Thêm tài khoản',
                type: "sub_navigation",
                dest: "/admin/users/create",
                icon: "",
                code: "CREATE_USER",
            },
            {
                title: 'Sửa tài khoản',
                type: "sub_navigation",
                dest: "/admin/users/edit",
                icon: "",
                code: "EDIT_USER",
            }
        ]
    },
    {
        title: 'Phòng họp',
        type: "navigation",
        dest: "/admin/conferences",
        code: "CONFERENCE",
        childs: [
            {
                title: 'Phòng họp đang hoạt động',
                type: "sub_navigation",
                dest: "/admin/conferences/active",
                icon: "",
                code: "ACTIVE_CONFERENCE",
            },
            {
                title: 'Danh sách phòng họp',
                type: "sub_navigation",
                dest: "/admin/conferences",
                icon: "",
                code: "LIST_CONFERENCE",
            },
            {
                title: 'Thêm phòng họp',
                type: "sub_navigation",
                dest: "/admin/conferences/create",
                icon: "",
                code: "CREATE_CONFERENCE",
            },
            {
                title: 'Sửa phòng họp',
                type: "sub_navigation",
                dest: "/admin/conferences/edit",
                icon: "",
                code: "EDIT_CONFERENCE",
            }
        ]
    },
]


export {
    routersNotAuth,
    routersAuth,
    menuRouters,
    menuUserRouters
}