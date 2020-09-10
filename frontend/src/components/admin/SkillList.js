import React, { useState, useEffect } from 'react';
import SkillForm from '../form/skill.form';


const Skill = () => {
    const [skills, setSkills] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('api/skills');
            const jsonResult = await result.json();
            setSkills(jsonResult);
            setIsLoaded(true);
        }
        fetchData();
    }, []);


    return (
        isLoaded ?
            <React.Fragment>
                {skills.map((skill, index) => {
                    return <SkillForm skill={skill} key={index} />
                })}

            </React.Fragment>
            :
            <React.Fragment>
                Loading...
        </React.Fragment>
    );
};

export default Skill;