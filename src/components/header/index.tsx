import React from 'react';
import styles from "./styles.module.scss";
import logo from "@assets/icons/logo.png";
import { Link } from "react-router-dom";
import { useHeader } from '@utils';

interface HeaderComponentProps {
    visible?: boolean
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
    visible = true
}) => {

    const { visible: visibleHook } = useHeader();
    const pages = [
        {
            link: "try-on",
            title: "Try on"
        },
        {
            link: "webinar",
            title: "Webinar"
        },
        {
            link: "register",
            title: "Register"
        },
        {
            link: "login",
            title: "Login"
        },
        {
            link: "admin",
            title: "Admin"
        },
    ]

    return (
        <div className={styles.container} style={ !visibleHook || !visible ? { display: 'none' } : { } }>
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
            </div>
        </div>
    );
}

export {
    HeaderComponent
};