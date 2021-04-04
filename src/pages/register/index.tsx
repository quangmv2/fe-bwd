import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.scss";

interface RegisterPageProps {

}

const RegisterPage: React.FC<RegisterPageProps> = () => {

  return (
      <div className={styles.container}>
          <Link to="/">
          <h1>Register Page</h1>
          </Link>
      </div>
  );
}

export default RegisterPage;