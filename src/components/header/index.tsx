import React, { memo, useCallback } from 'react';
import styles from "./styles.module.scss";
import logo from "@assets/icons/logo.png";
import { Link } from "react-router-dom";
import { useHeader } from '@utils';
import { useAuth } from '@store';
interface HeaderComponentProps {
    visible?: boolean
}

const HeaderComponent: React.FC<HeaderComponentProps> = memo(({
    visible = true
}) => {

    const { isAuth, setAuthencation } = useAuth();
    const { visible: visibleHook } = useHeader();

    const logout = useCallback(() => {
        setAuthencation(false);
    }, [])

    const pages = [
        {
            link: "/try-on",
            title: "Try on"
        },
        {
            link: "/webinar",
            title: "Webinar"
        },
        // {
        //     link: "/register",
        //     title: "Register"
        // },
        // {
        //     link: "/login",
        //     title: "Login"
        // },
        // {
        //     link: "admin",
        //     title: "Admin"
        // },
    ]

    return (
        <div className={styles.container} style={!visibleHook || !visible ? { display: 'none' } : {}}>
            <Link to="/">
                <img src={logo} alt="logo-hopez" />
            </Link>
            <div className={styles.linkPages}>
                {
                    pages.map(p => (
                        <Link to={p.link} key={`header key${p.link}`}>
                            <p>{p.title}</p>
                        </Link>
                    ))
                }
                {
                    !isAuth ? (
                        <>
                            <Link to="/login">
                                <p>Login</p>
                            </Link>
                            <Link to="/register">
                                <p>Register</p>
                            </Link>
                        </>
                    ) : (
                            <a onClick={logout}>
                                <p>Logout</p>
                            </a>
                        )
                }
                <Link to="/admin">
                    <p>Admin</p>
                </Link>
            </div>
        </div>
    );
})

export {
    HeaderComponent
};