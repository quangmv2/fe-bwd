import { appPermisions } from "@constants"
import { IMenuRouter, IRouter } from "@type"

const routersNotAuth: IRouter[] = [
    // {
    //     exact: true,
    //     path: '/',
    //     component: 'landing-page'
    // },
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
        component: 'home',
        noHeader: true
    },
    // {
    //     exact: true,
    //     path: '*',
    //     component: '404',
    //     noHeader: true
    // },
]

const routersUser: IRouter[] = [
    {
        exact: true,
        path: '/',
        
        component: 'user/new-feed-page',
        title: 'new feed',
        sidebar: true,
        noHeader: false,
        noBottomNav: false
    },
    {
        exact: true,
        path: '/psychologist',
        component: 'user/psychologist-list',
        sidebar: true,
        title: 'Therapists',
    },
    {
        exact: true,
        path: '/post/:id',
        component: 'user/post',
        sidebar: false,
        title: 'post',
        noHeader: true,
        noBottomNav: true
    },
    {
        exact: true,
        path: '/message/:id',
        component: 'user/message',
        title: 'Messages',
        sidebar: false,
        noHeader: false,
        noBottomNav: false
    },
    {
        exact: true,
        path: '/profile/:id',
        component: 'user/user-profile',
        title: 'profile',
        sidebar: false,
        noHeader: false,
        noBottomNav: false
    },
    {
        exact: true,
        path: '/schedule',
        component: 'user/schedule',
        title: 'schedule',
        sidebar: false,
        noHeader: false,
        noBottomNav: false
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
        path: '/post',
        component: 'admin/post'
    },
    {
        exact: true,
        path: '/comment',
        component: 'admin/comment'
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
        title: 'Bài viết',
        type: "navigation",
        dest: "/admin/post",
        permissions: [appPermisions.USER_VIEW],
    },
    {
        title: 'Bình luận',
        type: "navigation",
        dest: "/admin/comment",
        permissions: [appPermisions.USER_VIEW],
    },
    {
        title: 'Tài khoản',
        type: "navigation",
        dest: "/admin/users",
        permissions: [appPermisions.USER_VIEW],
    }
    // {
    //     title: 'Phòng họp',
    //     type: "navigation",
    //     dest: "/admin/conferences",
    //     permissions: ["ACTIVE_CONFERENCE", "LIST_CONFERENCE", "CREATE_CONFERENCE", "EDIT_CONFERENCE"],
    //     childs: [
    //         {
    //             title: 'Phòng họp đang hoạt động',
    //             type: "sub_navigation",
    //             dest: "/admin/conferences/active",
    //             icon: "",
    //             permission: "ACTIVE_CONFERENCE",
    //         },
    //         {
    //             title: 'Danh sách phòng họp',
    //             type: "sub_navigation",
    //             dest: "/admin/conferences",
    //             icon: "",
    //             permission: "LIST_CONFERENCE",
    //         },
    //         {
    //             title: 'Thêm phòng họp',
    //             type: "sub_navigation",
    //             dest: "/admin/conferences/create",
    //             icon: "",
    //             permission: "CREATE_CONFERENCE",
    //         },
    //         {
    //             title: 'Sửa phòng họp',
    //             type: "sub_navigation",
    //             dest: "/admin/conferences/edit",
    //             icon: "",
    //             permission: "EDIT_CONFERENCE",
    //         }
    //     ]
    // },
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
    menuRouters,
    routersUser
}