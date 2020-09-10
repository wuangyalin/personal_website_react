import React from 'react';
import About from './About';
import Skill from './SkillList';
import ProjectList from './ProjectList';
import ContactInfo from './ContactInfo';
import { Container, Tabs, Tab } from 'react-bootstrap';



const Body = () => {
    return (
        <React.Fragment>
            <Container>
                <Tabs defaultActiveKey="about" id="admin-update-panel">
                    <Tab eventKey="about" title="About">
                        <About />
                    </Tab>
                    <Tab eventKey="skill" title="Skills">
                        <Skill />
                    </Tab>
                    <Tab eventKey="project" title="Projects">
                        <ProjectList />
                    </Tab>
                    <Tab eventKey="contact" title="Contact Info">
                        <ContactInfo />
                    </Tab>
                </Tabs>
            </Container>
        </React.Fragment>
    );
};

export default Body;
