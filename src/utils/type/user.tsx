import { AppPermission } from "@constants";

export interface User {
    username: string,
    fullname: string,
    email?: string,
    address?: string, 
    pictureUrl?: string,
    permissions: AppPermission[],
    role: string,   
}