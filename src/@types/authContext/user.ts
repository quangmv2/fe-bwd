import { TAppPermission } from "../prermission";

export type TUser  = {
    username: string,
    fullName: string,
    email?: string,
    address?: string, 
    pictureUrl?: string,
    permissions: TAppPermission[],
    role: string,   
}