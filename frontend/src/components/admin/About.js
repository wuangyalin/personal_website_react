import React, { useState, useEffect } from 'react';
import AboutForm from '../form/about.form';



const About = () => {
    const [aboutSection, setAboutSection] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('api/sections/about');
            const jsonResult = await result.json();
            if (jsonResult.length >= 0) {
                setAboutSection(jsonResult[0]);
                setIsLoaded(true);
            }
        }
        fetchData();
    }, []);


    return (
        isLoaded ?
            <React.Fragment>
                <h1 className="h3 mb-3 font-weight-normal">Edit About Section </h1>
                <AboutForm aboutSection={aboutSection} />
            </React.Fragment>
            :
            <React.Fragment>
                Loading...
        </React.Fragment>
    );
};

export default About;