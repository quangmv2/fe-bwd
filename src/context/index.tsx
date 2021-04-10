import { createContext, Dispatch, useContext, useReducer } from "react";
import { TAuthAction } from "@type";
// import { uniq } from "lodash";
import { IAuthState } from "@type";
import { authReducer, FCAuthReducer, initAuthState } from "./auth";

interface TAuthContext {
    stateAuth: IAuthState,
    dispatchAuth: Dispatch<TAuthAction>
}

export const StoreContext = createContext<TAuthContext>({
    stateAuth: initAuthState,
    dispatchAuth: () => {}
});


export const StoreContextProvider = ({
    children
}) => {

    const [stateAuth, dispatchAuth] = useReducer<FCAuthReducer<IAuthState, TAuthAction>>(authReducer, initAuthState);

    return (
        <StoreContext.Provider 
            value={{
                stateAuth, dispatchAuth
            }}
        >
            { children }
        </StoreContext.Provider>
    )
}


export const useAuth = () => {
    const { stateAuth, dispatchAuth } = useContext<TAuthContext>(StoreContext);
    return {
        ...stateAuth,
        dispatchAuth
    }
}