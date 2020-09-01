import React from 'react';
import { Link } from "react-scroll";
import { Row, Col } from 'react-bootstrap';


const AboutContent = ({description}) => (
    <React.Fragment>
        <Row>
            <Col sm="12" className="text-left">
                <div dangerouslySetInnerHTML={{__html: description}} />
                <p>Interested me? Click <Link to="contact" smooth={true} href="#">Here</Link> to know more about me!</p>
            </Col>
        </Row>
    </React.Fragment>
);

export default AboutContent;
