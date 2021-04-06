export const PERMS = {
    APP: {
        ADMIN_PAGE: "ADMIN_PAGE",
        DASHBOARD_PAGE: "DASHBOARD_PAGE",
        ROLE_DELETE: 'APP_ROLE_DELETE',
        ROLE_EDIT: 'APP_ROLE_EDIT',
        ROLE_VIEW: 'APP_ROLE_VIEW',
        ROLE_CREATE: 'APP_ROLE_CREATE',
        USER_LIST: 'APP_USER_LIST',
        USER_CREATE: 'APP_USER_CREATE',
        USER_EDIT: 'APP_USER_EDIT',
        USER_UPDATE_ROLE: 'APP_USER_UPDATE_ROLE',
        USER_DELETE: 'APP_USER_DELETE',
    }
}

type AppPermissionKeys = keyof typeof PERMS.APP
export type AppPermission = typeof PERMS.APP[AppPermissionKeys]
export const appPermisions = PERMS.APP; 