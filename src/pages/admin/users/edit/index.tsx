import React from 'react';
import styles from "./styles.module.scss";

interface AdminUsersPageProps {

}

const AdminUsersPage: React.FC<AdminUsersPageProps> = () => {
  return (
      <div className={styles.container}>
          <h1>Admin Edit User Page</h1>
      </div>
  );
}

export default AdminUsersPage;