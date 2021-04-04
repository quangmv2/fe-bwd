import React from 'react';
import styles from "./styles.module.scss";

interface AdminHomePageProps {

}

const AdminHomePage: React.FC<AdminHomePageProps> = () => {
  return (
      <div className={styles.container}>
          <h1>Admin Home Page</h1>
      </div>
  );
}

export default AdminHomePage;