import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.scss";

interface NotFoundPageProps {

}

const NotFoundPage: React.FC<NotFoundPageProps> = () => {

  return (
    <div className={styles.container}>
      <h1>404</h1>
      <Link to="/">
        <h1>Home Page</h1>
      </Link>
    </div>
  );
}

export default NotFoundPage;