
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
        width={260}
        className=''
      >
        <div style={{ marginTop: '105px', height: 'calc(100vh - 105px - 1.5rem )', marginRight: '1rem' }} className='px-2 bg-white border-radius-12 shadow-css' >
         
          <PsychologistFilter />
         
          {/* <PsychologistOverview /> */}
        </div>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: '270px', maxWidth: '100%' }} >
        <Content className='px-3 pt-4'>
          <PsychologistItem />
        </Content>
      </Layout>
    </Layout>

  );
}

export default PsychologistListPage;