import React from 'react';
import styles from "./styles.module.scss";

interface HomePageProps {

}

const HomePage: React.FC<HomePageProps> = () => {
  return (
      <div className={styles.container}>
          <h1>Home Page</h1>
      </div>
  );
}

export default HomePage;