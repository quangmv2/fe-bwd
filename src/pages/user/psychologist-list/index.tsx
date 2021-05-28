// import React from 'react';
// import { Link } from 'react-router-dom';
// import styles from "./styles.module.scss";
// import { Row, Col, Input } from 'antd'
// import { SearchOutlined } from '@ant-design/icons'
// import './styles.scss'
// import _ from 'lodash'
// import { PsychologistItem, PsychologistOverview } from '@components'


// interface PsychologistPageProps {

// }

// const PsychologistListPage: React.FC<PsychologistPageProps> = () => {

//   return (
//     <Row className={` px-3 psychologist-list-wrap ${styles.wrap}`}>
//       <Col span={12} className='px-2'>
//       <PsychologistItem />
//       </Col>
//       <Col span={12}>
//         <PsychologistOverview />
//       </Col>
//     </Row>
//   );
// }

// export default PsychologistListPage;
import React from 'react';
import styles from "./styles.module.scss";
import { StorySection, AddPost, Post, ContactSidebar, PsychologistItem } from "@components";
import { Col, Row, Avatar, Input, Badge } from 'antd';

import './styles.scss'
import _ from 'lodash'
import { Swiper, SwiperSlide } from "swiper/react";
import { Layout, Menu } from 'antd';
import { PsychologistOverview } from '@components'

const { Header, Content, Footer, Sider } = Layout;



interface PsychologistListProps {

}

const PsychologistListPage: React.FC<PsychologistListProps> = () => {

  return (
   
    <Layout className='psychologist-list-page-wrap'>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        right: 0,
        top: 0
      }}
      className='psychologist-list-sider d-flex align-items-center'
    >
      <div style={{ paddingTop: '164px'}}>
   <PsychologistOverview />
   </div>
    </Sider>
    <Layout className="site-layout" style={{ marginRight: '500px', maxWidth: '100%' }} >
      <Content  className='px-3 pt-4'>
      <PsychologistItem />
      </Content>

    </Layout>
  </Layout>

  );
}

export default PsychologistListPage;