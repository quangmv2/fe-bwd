import { axiosClient } from '@config';
import React, { useEffect } from 'react';
import styles from "./styles.module.scss";

interface HomePageProps {

}

const HomePage: React.FC<HomePageProps> = () => {

  useEffect(() => {
    loadImage()
  }, [])

  const loadImage = async () => {
    let result = await axiosClient.get('/file/download?id=8182dde0-b70c-11eb-b259-27a34794d0b7.jpg', {
      onDownloadProgress: progressEvent => {
        // const total = parseFloat(progressEvent.currentTarget.responseHeaders['Content-Length'])
        const current = progressEvent.currentTarget.response.length
        // let percentCompleted = Math.floor(current / total * 100)
        console.log('completed: ', current, progressEvent)
      }
    })
      .then(res => {
        console.log("All DONE: ", res.headers)
        return res.data
      })
  }

  return (
    <div className={styles.container}>
      <img src="http://localhost:4200/file/download?id=8182dde0-b70c-11eb-b259-27a34794d0b7.jpg" style={{ 
        height: "100%"
      }} />
    </div>
  );
}

export default HomePage;