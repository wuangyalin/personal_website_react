import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { updateSkills } from '../../services/admin.update';
import { Row, FormGroup, FormLabel, Col } from 'react-bootstrap';
import SubmitButton from './button.submit';




const SkillForm = ({ skill }) => {
    const [isChanged, setIsChanged] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);

    return <Formik
        initialValues={{
            id: skill._id,
            name: skill.name,
            content: skill.content,
        }}
        onSubmit={async (values) => {
            try {
                const result = await updateSkills(values.content, values.name, values.id);
                if (result) {
                    setIsUpdated(true);
                    setIsChanged(false);
                } else {
                    console.log('Somthing went wrong');
                }

            } catch (error) {
                console.log(error);
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

            return errors;
        }}
    >
        {({ isSubmitting }) => (
            <Form onChange={() => setIsChanged(true)}>
                <h1 className="h3 mb-3 font-weight-normal">Edit Skill - {skill.id} </h1>
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

                <SubmitButton isSubmitting={isSubmitting} isChanged={isChanged} isUpdated={isUpdated} />



            </Form>
        )}
    </Formik>
}

export default SkillForm;