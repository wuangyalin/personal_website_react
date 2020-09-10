import React, { useState, useEffect } from 'react';
import SkillForm from '../form/skill.form';
import { AddButton, RemoveButton } from '../form/form.button';



const Skill = () => {
    const [skills, setSkills] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [newForm, setNewForm] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('api/skills');
            const jsonResult = await result.json();
            setSkills(jsonResult);
            setIsLoaded(true);
        }
        fetchData();
    }, []);

    const addNewForm = () => {
        setNewForm(true);
    }

    const cancelForm = () => {
        setNewForm(false);
    }

    return (
        isLoaded ?
            <React.Fragment>
                <h1>Edit Skills</h1>
                <div className="d-flex justify-content-between">
                    <div onClick={addNewForm}>
                        <AddButton title="Skill" />
                        
                    </div>
                    <div onClick={cancelForm}>
                        <RemoveButton title='Cancel'/>
                    </div>
                </div>
                <hr />
                {newForm ?
                    <SkillForm skill={{
                        _id: '',
                        id: '',
                        name: '',
                        content: '',
                    }} isNewForm={newForm} />
                    : ''
                }
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