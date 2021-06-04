import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.scss";
import { Row, Col, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import './styles.scss'
import _ from 'lodash'
import { woman1 } from '@assets'

interface PsychologistPageProps {

}

const PsychologistListPage: React.FC<PsychologistPageProps> = () => {
  const doctor = [
    {
      name: 'Alllo',
      star: 3
    },

    {
      name: 'Alllo',
      star: 3
    },
    {
      name: 'Alllo',
      star: 3
    },
    {
      name: 'Alllo',
      star: 3
    },
    {
      name: 'Alllo',
      star: 3
    },

  ]
  const renderMessageItems = () => {
    return _.map(doctor, ({ name, star }) => {
      return (
        <div>
          <div className='d-flex bg-white border-radius-12 p-3 my-3 shadow-css' style={{ height: '100px' }}>
            <img src={woman1} className='h-100 border-radius-12' />
            <div>
              <p>{name}</p>
            </div>
          </div>
        </div>
      )
    })

  }
  return (
    <Row className={` px-3 psychologist-list-wrap ${styles.wrap}`}>
      <Col span={12} className='px-2'>
        <p className={`${styles.title} text-capitalize`}>psychologist</p>
        <div>
          <Input bordered={false} className='bg-white border-radius-12 overflow-hidden' prefix={<SearchOutlined />} />
        </div>
        <div>
          {renderMessageItems()}
        </div>
      </Col>
      <Col span={12}>
      </Col>
    </Row>
  );
}

export default PsychologistListPage;