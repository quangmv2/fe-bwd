import { CameraOutlined, HeartOutlined } from '@ant-design/icons';
import { Avatar, Input, Row, Col } from 'antd';
import React, { useState } from 'react';
import styles from "./styles.module.scss"
import ImageUploading, { ImageListType } from "react-images-uploading"
import { ButtonComponent } from '@components'
import './add-post.scss'
import { VideoCameraOutlined, CheckOutlined } from '@ant-design/icons'
import { RiMoreFill } from "react-icons/ri"
import { MoreThanThree, TwoPhotoLayout } from '../layout/photo-layout'


interface addPostProps {
}
const { TextArea } = Input;

const AddPost: React.FC<addPostProps> = ({

}) => {
    var imageData = [
        'http://via.placeholder.com/400x400/',
        'http://via.placeholder.com/500x700/',
        'http://via.placeholder.com/600x500/',
        'http://via.placeholder.com/600x800/'
    ];
    const image = []
    const [images, setImages] = useState([]);
    const maxNumber = 69;
    const onChange = (
        imageList: ImageListType,
        addUpdateIndex: number[] | undefined
    ) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList as never[]);
        for (const k in imageList) {
            image.push(imageList[k].dataURL)
        }
    };
    return (
        <div className={`${styles.wrap} py-2 add-post-wrap my-3`}>
            <div className='bg-white border-radius-12 w-100 p-3 shadow-css'>
                <Row >
                    <Col lg={20} md={20} sm={19} xs={21} className='mt-2 mt-lg-0 mt-sm-0 mt-md-0 mt-xl-0 mt-xxl-0'>
                        <div className='d-flex align-items-center'>
                            <div>
                                <Avatar shape='square' size={40} className='border-radius-12'>N</Avatar>
                            </div>
                            <TextArea
                                bordered={false}
                                placeholder="What's new?"
                                autoSize={{ minRows: 1, maxRows: 4 }}
                            />
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={5} xs={3} className=' d-flex align-items-center justify-content-end ' >
                        <ButtonComponent className={`text-capitalize d-flex align-items-center justify-content-between ${styles.postButton}`}>
                            <CheckOutlined />
                            <span className={styles.postButtonContent}>Post It!</span></ButtonComponent>
                    </Col>
                </Row>
                <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                >
                    {({
                        imageList,
                        onImageUpload,
                        onImageRemoveAll,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps
                    }) => (
                        <>
                        { 
                        imageList.length > 0 ? <>{imageList.length == 2 ? <TwoPhotoLayout imageList={imageList}
                        removeImage={onImageRemove} /> : <MoreThanThree
                        imageList={imageList}
                        removeImage={onImageRemove}
                    />} </>: <></>
                        }
                            
                        </>
                    )}
                </ImageUploading>
                <div className='d-flex justify-content-between mt-3'>
                    <div className={`option-wrap text-capitalize d-flex align-items-center`}>
                        <div className='d-flex align-items-center hover-pointer'>
                            <VideoCameraOutlined className={styles.videoIcon} />
                            <p className='m-0 '>video</p>
                        </div>

                        <ImageUploading
                            multiple
                            value={images}
                            onChange={onChange}
                            maxNumber={maxNumber}
                        >
                            {({
                                imageList,
                                onImageUpload,
                                onImageRemoveAll,
                                onImageUpdate,
                                onImageRemove,
                                isDragging,
                                dragProps
                            }) => (

                                <div
                                    {...dragProps}
                                    onClick={onImageUpload}
                                    className='d-flex align-items-center hover-pointer' >
                                    <CameraOutlined
                                        className={styles.cameraIcon} />
                                    <p className='m-0'>photo</p>
                                </div>
                            )}
                        </ImageUploading>


                        <div className='d-flex align-items-center hover-pointer'>
                            <HeartOutlined className={styles.heartIcon} />
                            <p className='m-0'>feeling</p>
                        </div>
                    </div>
                    <div>
                        <div className={` hover-pointer ${styles.moreOption}`}>
                            <RiMoreFill style={{ fontSize: '23px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddPost;