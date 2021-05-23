import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.scss";

interface PsychologistPageProps {

}

const PsychologistListPage: React.FC<PsychologistPageProps> = () => {

  return (
      <div className={styles.container}>
          <Link to="/">
          <h1>Register Page</h1>
          </Link>
      </div>
  );
}

export default PsychologistListPage;