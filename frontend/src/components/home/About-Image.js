import React from 'react';
import { GreyImg } from '../../styled-components/HomeStyles';
import { Row } from 'react-bootstrap';


const AboutImage = ({ image }) => (
    <React.Fragment>
        <Row >
            <GreyImg src={`${image ? image : "./assets/images/personal.jpg" }`} width="30%" className="image img-fluid img-circl mx-auto d-block" alt="This is me" />
        </Row>
    </React.Fragment>
);

export default AboutImage;


