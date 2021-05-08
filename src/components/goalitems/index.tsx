import { ClockCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.scss";

interface GoalItemsProps {

}

const GoalItem: React.FC<GoalItemsProps> = () => {

  return (
    <div className={` container p-4 ${styles.container}`}>
     <div className='text-center'>
       <ClockCircleOutlined className={styles.icon}/>
       <h4 className='pt-3'>Time saving</h4>
       <p className='pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat debitis cumque quis, aliquam inventore deserunt distinctio in laboriosam eveniet dignissimos corrupti, natus beatae sit excepturi expedita, officia consectetur dicta a?</p>
     </div>
    </div>
  );
}

export default GoalItem;