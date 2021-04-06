import { createContext, useCallback, useContext, useState } from "react";
import { User } from "src/utils/type";
import { uniq } from "lodash";

export interface UserContextProps {

}
export interface AuthContextProps  {
    isAuth: boolean,
    setIsAuth: (isAuth: boolean) => void
    user?: User,
    setUser: (user: User) => void,
    setAuthencation: (isAuth: boolean, user?: User) => boolean;
}

export const AuthContext = createContext<AuthContextProps>({
    isAuth: false,
    setIsAuth: (isAuth: boolean) => {},
    user: null,
    setUser: (user: User) => {},
    setAuthencation: (isAuth: boolean, user?: User): boolean => true
});


export const AuthContextProvider = ({
    children
}) => {

    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [user, setUser] = useState<User | null | undefined>(null);

    const setAuthencation = useCallback((isAuth: boolean, user?: User) =>{
        if (!isAuth) {
            setIsAuth(false);
            setUser(null);
            return true;
        }
        if (isAuth && !user) return false;
        setIsAuth(true);
        user.permissions = uniq(user.permissions);
        setUser(user);
        return true;
    }, [setIsAuth, setUser]);

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            user,
            setUser,
            setAuthencation
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
