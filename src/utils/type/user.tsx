export interface User {
    username: string,
    fullname: string,
    email?: string,
    address?: string, 
    pictureUrl?: string,
    permissions: [string],
    role: string,   
}