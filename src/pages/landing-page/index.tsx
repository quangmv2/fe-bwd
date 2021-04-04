import React from 'react';
import indexStyles from "./index.module.scss";
import { ButtonComponent } from '@components';
import { Rate } from "antd";

interface LandingProps {

}

const Landing: React.FC<LandingProps> = () => {
    return (
        <div className={indexStyles.container}>
            <h1>Landing Page</h1>
            <div>
                <ButtonComponent>
                    Submit
                </ButtonComponent>
                <Rate allowHalf defaultValue={2.5} />
            </div>
        </div>

    );
}

export default Landing;