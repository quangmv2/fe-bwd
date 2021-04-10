import { PERMS } from "@constants"

type AppPermissionKeys = keyof typeof PERMS.APP
export type TAppPermission = typeof PERMS.APP[AppPermissionKeys]