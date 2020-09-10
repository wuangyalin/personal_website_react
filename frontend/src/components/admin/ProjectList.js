import React, { useState, useEffect } from 'react';
import ProjectForm from '../form/project.form';

const Work = () => {
    const [projects, setProjects] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('api/projects');
            const jsonResult = await result.json();
            console.log(jsonResult);
            setProjects(jsonResult);
            setIsLoaded(true);
        }
        fetchData();
    }, []);


    return (
        isLoaded ?
            <React.Fragment>
                {projects.map((project, index) => {
                    return <ProjectForm  project={project} key={index} />
                })}

            </React.Fragment>
            :
            <React.Fragment>
                Loading...
        </React.Fragment>
    );
};

export default Work;