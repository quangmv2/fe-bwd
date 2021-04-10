import { IAuthState, TAuthAction } from "@type";
import { uniq } from "lodash";

export type FCAuthReducer<IAuthState, TAuthAction> = (prevState: IAuthState, action: TAuthAction) => IAuthState

export const authReducer: FCAuthReducer<IAuthState, TAuthAction> = (prevState: IAuthState, action: TAuthAction): IAuthState => {
    switch (action.type) {
        case "SET_AUTH":
            return { ...prevState, isAuth: action.payload.isAuth }
        case "SET_USER":
            return { ...prevState, user: action.payload.user }
        case "SET_AUTHEN":
            const state = { ...prevState };
            if (action.payload.isAuth) {
                state.isAuth = true;
                state.user = action.payload.user
                state.user.permissions = uniq(state.user.permissions);
            } else {
                state.isAuth = false;
                state.user = null;
            }
            return state;
        default:
            return { ...prevState }
    }
}