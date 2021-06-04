import { CloseCircleFilled, CloseCircleOutlined } from "@ant-design/icons"
import { appPermisions } from "@constants"
import { IMenuRouter, IRouter } from "@type"
import { Row, Col, Grid } from 'antd'

const { useBreakpoint } = Grid;


const TwoPhotoLayout = props => {
    const screens = useBreakpoint()
    return (

        <Row className='h-100' style={props.imageList.length > 0 ? { height: '350px' } : {}}>
            {props.imageList.map((image, index) => (
                <Col key={index} lg={12} sm={12} xs={24} md={12} className={` mt-3 px-1 h-100`} >
                    <div className='w-100 h-100 border-radius-12 position-relative shadow-css'>
                        <img src={image.dataURL} style={{ height: '350px' }} className='w-100 mh-100 border-radius-12' />
                        <>
                            {props.hasClosed ? <CloseCircleFilled
                                onClick={props.removeImage}
                                className='text-white mt-3 hover-pointer position-absolute ' style={{ fontSize: '27px', zIndex: 10, right: '10px' }} /> : <></>}
                        </>
                    </div>
                </Col>
            ))}
        </Row>


    )
}

const MoreThanThree = props => {
    return (
        <Row className='mt-3' style={props.imageList.length > 0 ? { height: '350px' } : {}}>
            <Col span={props.imageList.length == 1 ? 24 : 12} className='pb-3 h-100'>
                {props.imageList.map((image, index) => (
                    <>
                        {index == 0 ?
                            <div className=' h-100 border-radius-12 position-relative'>
                                <img src={image.dataURL} className='w-100 h-100 border-radius-12' />
                                <CloseCircleFilled
                                    onClick={props.removeImage}
                                    className='text-white mt-3 hover-pointer position-absolute ' style={{ fontSize: '27px', zIndex: 10, right: '10px' }} />
                            </div>
                            : <div>
                            </div>}
                    </>
                ))}
            </Col>
            <Col span={12} style={{ paddingLeft: '1rem' }} className='h-100'>
                <Row className='h-100'>
                    {props.imageList.map((image, index) => (
                        <>
                            {(index > 0 && index < 3) ?
                                <Col
                                    className={`pb-3 ${props.imageList.length > 2 ? `h-50` : `h-100`}`}
                                    key={index} span={24} >
                                    <div className='w-100 w-100 h-100 border-radius-12 position-relative'>
                                        <img src={image.dataURL} className='w-100 h-100 border-radius-12 shadow-css' />
                                        <>
                                            {props.hasClosed ? <CloseCircleFilled
                                                onClick={props.removeImage}
                                                className='text-white mt-3 hover-pointer position-absolute ' style={{ fontSize: '27px', zIndex: 10, right: '10px' }} /> : <></>}
                                        </>
                                        {(props.imageList.length > 3 && index == 2) ? <span style={{

                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            background: 'rgba(0, 0, 0, 0.6)'

                                        }} className='text-white border-radius-12 w-100 h-100 '>
                                            <b
                                                style={{
                                                    fontSize: '22px',
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    width: '30px',
                                                    height: '30px',
                                                    marginLeft: '-15px',
                                                    marginTop: '-15px',
                                                    fontWeight: 700
                                                }}
                                            >+{props.imageList.length - 3}</b>
                                        </span> : <div></div>}
                                    </div>
                                </Col>
                                : <div>
                                </div>}
                        </>
                    ))}
                </Row>
            </Col>
        </Row>
    )
}


export { MoreThanThree, TwoPhotoLayout };