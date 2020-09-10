import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { updateSkills, addNewSkill, deleteSkill } from '../../services/admin.update';
import { Row, FormGroup, FormLabel, Button, Col } from 'react-bootstrap';
import { SubmitButton } from './form.button';




const SkillForm = ({ skill, isNewForm }) => {
    const [isChanged, setIsChanged] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);

    const removeSkill = async () => {
        try {
            const result = await deleteSkill(skill._id);
            if (result) {
                setIsDeleted(true);
            } else {
                console.log('Somthing went wrong');
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        isDeleted ?
            ''
            :
            <Formik
                initialValues={{
                    _id: skill._id,
                    id: skill.id,
                    name: skill.name,
                    content: skill.content,
                }}
                onSubmit={async (values) => {
                    if (!isNewForm) {
                        try {
                            const result = await updateSkills(values.content, values.name, values.id, values._id);
                            if (result) {
                                setIsUpdated(true);
                                setIsChanged(false);
                            } else {
                                console.log('Somthing went wrong');
                            }

                        } catch (error) {
                            console.log(error);
                        }
                    } else {
                        try {
                            const result = await addNewSkill(values.content, values.name, values.id);
                            if (result) {
                                setIsUpdated(true);
                                setIsChanged(false);
                            } else {
                                console.log('Somthing went wrong');
                            }

                        } catch (error) {
                            console.log(error);
                        }
                    }

                }}
                validate={(values) => {
                    const errors = {};
                    if (!values.content) {
                        errors.content = 'Content is Required';
                    }

                    if (!values.name) {
                        errors.name = 'Name is Required';
                    }

                    if (!values.id) {
                        errors.id = 'ID is required';
                    }

                    return errors;
                }}
            >
                {({ isSubmitting }) => (
                    <Form onChange={() => setIsChanged(true)}>
                        {isNewForm ?
                            <div>
                                <h4 className="h4 mb-3 font-weight-normal">Add New Skill </h4>
                                <Row>
                                    <FormGroup as={Col}>
                                        <FormLabel>ID</FormLabel>
                                        <Field id="id" className="form-control" name="id" placeholder="ID" />
                                        <ErrorMessage name="id" component="div" />
                                    </FormGroup>
                                </Row>
                            </div> :
                            <h4 className="h4 mb-3 font-weight-normal">Edit Skill - {skill.id} </h4>
                        }
                        <Row>
                            <FormGroup as={Col}>
                                <FormLabel>Name</FormLabel>
                                <Field id="name" className="form-control" name="name" placeholder="name" />
                                <ErrorMessage name="name" component="div" />
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup as={Col}>
                                <FormLabel>Content</FormLabel>
                                <Field component="textarea" rows={3} id="content" name="content" className="form-control" placeholder="Content" />
                                <ErrorMessage name="content" component="div" />
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup as={Col}>
                                <SubmitButton isSubmitting={isSubmitting} isChanged={isChanged} isUpdated={isUpdated} isNewForm={isNewForm} />
                                {isNewForm ? <hr /> :
                                    <Button variant="danger" onClick={removeSkill}> Delete </Button >
                                }
                            </FormGroup>
                        </Row>

                    </Form>
                )}
            </Formik>
    )
}

export default SkillForm;