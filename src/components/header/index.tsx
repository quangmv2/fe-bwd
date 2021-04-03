import React from 'react';
import styles from "./styles.module.scss";
import logo from "@assets/icons/logo.png";

const pages = [
    "Try on", "Webinar", "Document", "Login"
]

interface HeaderComponentProps {

}

const HeaderComponent: React.FC<HeaderComponentProps> = () => {
    return (
        <div className={styles.container}>
            
            <a href="/">
            <img src={logo} alt="logo-hopez" />
            </a>
            <div className={styles.linkPages}>
                {
                    pages.map(p => (
                        <a key={`btn header${p}`} href="/">
                            <p>{p}</p>
                        </a>
                    ))
                }
            </div>
        </div>
    );
}

export {
    HeaderComponent
};