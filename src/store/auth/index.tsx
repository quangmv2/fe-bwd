import { createContext, useContext, useState } from "react";
import { User } from "src/utils/type";

export interface UserContextProps {

}

export interface AuthContextProps  {
    isAuth: boolean,
    setIsAuth: Function
    user?: User,
    setUser: Function
}

export const AuthContext = createContext<AuthContextProps>({
    isAuth: false,
    setIsAuth: (isAuth: boolean) => {},
    user: null,
    setUser: (user: User) => {}
});


export const AuthContextProvider = ({
    children
}) => {

    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [user, setUser] = useState<User | null | undefined>(null);

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            user,
            setUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
