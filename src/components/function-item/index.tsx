import { ClockCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.scss";

interface FunctionItemsProps {

}

const FunctionItem: React.FC<FunctionItemsProps> = () => {

  return (
    <div className={` container p-4 ${styles.container}`}>
     <div className='text-center'>
       <ClockCircleOutlined className={styles.icon}/>
       <p className='pt-3'>Time saving</p>
       
     </div>
    </div>
  );
}

export default FunctionItem;