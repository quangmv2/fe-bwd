
import React from 'react';
import { PsychologistItem, PsychologistFilter } from "@components";
import './styles.scss'
import _ from 'lodash'
import { Swiper, SwiperSlide } from "swiper/react";
import { Layout, Menu } from 'antd';

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
          left: 285,
          top: 0
        }}
        width={285}
        className=''
      >
        <div style={{ paddingTop: '105px' }} className='px-2 w-100'>
         
          <PsychologistFilter />
         
          {/* <PsychologistOverview /> */}
        </div>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: '285px', maxWidth: '100%' }} >
        <Content className='px-3 pt-4'>
          <PsychologistItem />
        </Content>
      </Layout>
    </Layout>

  );
}

export default PsychologistListPage;