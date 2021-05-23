import { TAppPermission } from "../prermission";

export interface IRouter {
    exact: boolean,
    path: string,
    component: string,
    noHeader?: boolean,
    option?: any,
    permission?: TAppPermission,
    title?: string
}

export interface IMenuRouter {
    title: string,
    type: "link" | "navigation" | "button",
    dest: string,
    childs?: {
        title: string,
        type: string,
        dest: string,
        icon?: string,
        permission?: TAppPermission
    }[],
    permissions?: TAppPermission[]
}