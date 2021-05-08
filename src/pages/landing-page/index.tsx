import React from 'react';
import indexStyles from "./index.module.scss";
import { GoalItem, FunctionItem } from '@components';
import { Row, Col, Form, Input, Button } from "antd";
import { hug, mindset, sharing, underline, underline2, woman1, drugs, womanTogether } from '@assets'
import { FacebookOutlined, PlayCircleFilled } from '@ant-design/icons'
import './landing-page.scss'
import _ from 'lodash'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa"


interface LandingProps {

}

const Landing: React.FC<LandingProps> = () => {
    const funtionItem = [
        {
            title: 'qqq'
        },
        {
            title: 'qqq'
        },
        {
            title: 'qqq'
        },
        {
            title: 'qqq'
        },
        {
            title: 'qqq'
        },
        {
            title: 'qqq'
        },
    ]
    const renderFunction = () => {
        return _.map(funtionItem, ({ title }) => {
            return (
                <Col span={12} className={`py-5 ${indexStyles.functionItemWrap}`}>
                    <FunctionItem />
                </Col>

            )
        })
    }
    return (
        <div className={`  landing-page-container ${indexStyles.container}`}>
            <Row className={`${indexStyles.sloganContainer}`}>
                <Col lg={9} md={24} className='pt-5 d-flex justify-content-center'>
                    <div>
                    <p className={indexStyles.sloganContent}>Cutting edge technology building the best online conference solution</p>
                    <img src={underline} />
                    <p className={`pt-4 ${indexStyles.sloganBody}`}>Without in-depth technology, business may find it hard to maintain effective management. HopEZ is a conference web-based solution to allow businesses, teams and schools/university to approach no-barriers conversation including online conference, online classes or webinars which are supported by varied powerful functionalities.</p>
                    <button className={`btn text-white mt-4 py-2 ${indexStyles.swuButton}`}>Share with us</button>
                    </div>
                </Col>
                <Col lg={15} md={0} sm={0} xs={0} className={`${indexStyles.sloganRight}`}>
                    <img className='w-100 h-100' src={mindset} />
                    {/* <div className='position-relative'>
                    <div className={` ${indexStyles.imageWrap}`} >
                        <img className={` ${indexStyles.woman2Size}`} src={woman2} />
                    </div>
                    <div className={` ${indexStyles.imageWrap} `}>
                        <img className={` ${indexStyles.woman1Size}`} src={woman1} />
                    </div>
                    <div className={` ${indexStyles.imageWrap}`}>
                    <img className={` ${indexStyles.hugSize}`} src={hug} />
                    </div>
                    </div> */}
                </Col>
            </Row>
            <section className={`${indexStyles.goalsContainer}`}>

                <div className={`${indexStyles.goalsHeader} `}>
                    <h2 className='text-center'>
                        Multiple popups for multiple <mark>goals</mark>
                    </h2>
                    <p className='text-center pt-4'>
                        From email capture to reducing cart abandonment, create multiple, personalized popups for different groups of visitors.
                </p>
                    {/* <img src={underline2}/> */}
                </div>
                <Row>
                    <Col lg={6} md={12} sm={12} xs={24}><GoalItem /></Col>
                    <Col lg={6} md={12} sm={12} xs={24}><GoalItem /></Col>
                    <Col lg={6} md={12} sm={12} xs={24}><GoalItem /></Col>
                    <Col lg={6} md={12} sm={12} xs={24}><GoalItem /></Col>
                </Row>
            </section>
            {/* <!-- VIDEO PLAY --> */}
            <section className={` mt-4 ${indexStyles.videoPlay}`}>
                <div className="container p-5">
                    <a href="#" className="video" data-video="https://www.youtube.com/embed/SeQ1OBwwWK4" data-toggle="modal"
                        data-target="#videoModal">
                        <PlayCircleFilled className={indexStyles.playIcon} />
                    </a>
                    <h1 className='text-white pt-3'>See What We Do</h1>
                </div>
            </section>
            <section className={`pt-5 container ${indexStyles.mainFuncContainer}`}>
                <h2 className='text-center'>Just do it right, you'll be safe</h2>
                <Row className='pt-5'>
                    <Col lg={12} md={24} className={indexStyles.imageContentWrap}>
                        <img className='w-100 h-100'  src={womanTogether} />
                    </Col>
                    <Col lg={12} md={24} className={` ${indexStyles.overViewContent} d-flex flex-column justify-content-center`}>
                        <h3 className='ml-5'>Lorem, ipsum dolor.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At amet eaque ea officiis ipsum, blanditiis facilis similique, deserunt provident non, praesentium vel dicta labore impedit asperiores earum necessitatibus sint officia itaque. Officia eligendi delectus reprehenderit temporibus ea, accusamus quis voluptates neque, quod architecto repellendus. Corporis, ratione eos? Autem, repellat incidunt!</p>
                        <span>Read more</span>
                    </Col>
                </Row>
                <Row className={indexStyles.overViewBox}>
                    <Col lg={12} md={24} className={` ${indexStyles.lastOverviewContent} d-flex flex-column justify-content-center`}>
                        <h3 >Lorem, ipsum dolor.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At amet eaque ea officiis ipsum, blanditiis facilis similique, deserunt provident non, praesentium vel dicta labore impedit asperiores earum necessitatibus sint officia itaque. Officia eligendi delectus reprehenderit temporibus ea, accusamus quis voluptates neque, quod architecto repellendus. Corporis, ratione eos? Autem, repellat incidunt!</p>
                        <span className='text-decoration-underline' >Read more</span>
                    </Col>
                    <Col lg={12} md={24} className={indexStyles.imageContentWrap}>
                        <img className='w-100 h-100'  src={drugs} />
                    </Col>
                </Row>
            </section>
            <section className='pt-5'>
                <div className={indexStyles.subArea}>
                    <div className='container'>
                        <Row className='d-flex justify-content-center align-items-center'>
                            <Col lg={12} md={24} className={` ${indexStyles.subcribeContent} container text-white`}>
                                <h1 className='text-white'>Join with us</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis fugiat itaque facilis nam placeat quos eum nesciunt architecto corrupti excepturi!</p>
                                <div className='pt-3'>
                                    <button className='btn text-white text-capitalize'>Contact us</button>
                                </div>
                            </Col>
                            <Col lg={12} md={24} className={` ${indexStyles.formWrap} bg-white`}>
                                <Form
                                    name="normal_login"
                                    className="login-form"
                                    initialValues={{ remember: true }}
                                //   onFinish={onFinish}
                                >
                                    <Form.Item
                                        name="username"
                                        rules={[{ required: true, message: 'Please input your Username!' }]}
                                    >
                                        <Input placeholder="Username" />
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        rules={[{ required: true, message: 'Please input your Password!' }]}
                                    >
                                        <Input

                                            type="password"
                                            placeholder="Password"
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        name="username"
                                        rules={[{ required: true, message: 'Please input your Username!' }]}
                                    >
                                        <Input placeholder="Username" />
                                    </Form.Item>


                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className="w-100 h-100 login-form-button">
                                            Log in
                                         </Button>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
            <section className='py-3'>
                <div className='container d-flex justify-content-lg-between align-items-lg-baseline flex-lg-row flex-column align-items-center justify-content-center'>
                    <p className='text-muted font-weight-bold'>
                        Copyright @2021 HearMe. Designed by QN
            </p>
                    <div className='d-flex'>
                        <div className={indexStyles.iconWrap}>
                            <FaInstagram />
                        </div>
                        <div className={indexStyles.iconWrap}>
                            <FaFacebookF />
                        </div>
                        <div className={indexStyles.iconWrap}>
                            <FaTwitter />
                        </div>
                        <div className={indexStyles.iconWrap}>
                            <FaLinkedinIn />
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Landing;