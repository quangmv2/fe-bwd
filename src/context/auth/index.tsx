import { IAuthState } from "@type"

export const initAuthState: IAuthState = {
    isAuth: false,
    user: null
}

export * from "./reducer"