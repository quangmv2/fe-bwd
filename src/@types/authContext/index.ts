import { TUser } from "./user";

export interface IAuthState {
    isAuth: boolean,
    user?: TUser,
}
export type TAuthAction = 
    | {
        type: "SET_AUTH",
        payload: {
            isAuth: boolean
        }
    }
    | {
        type: "SET_USER",
        payload: {
            user?: TUser
        }
    }
    | {
        type: "SET_AUTHEN",
        payload: |{
            isAuth: true,
            user: TUser
        }
        | {
            isAuth: false,
        }
    }

export * from "./user"