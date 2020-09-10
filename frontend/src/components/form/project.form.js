import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { updateProjects } from '../../services/admin.update';
import { Row, FormGroup, FormLabel, Col } from 'react-bootstrap';
import { SubmitButton } from './form.button';
import RichField from './richtest.field';




const ProjectForm = ({ project }) => {
    const [isChanged, setIsChanged] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);

    // const customRichField = () => {
    //     return <RichField content = {project.content} />;
    // }

    return <Formik
        initialValues={{
            id: project._id,
            name: project.name,
            link: project.link,
            description: project.description,
            contribution: project.contribution,
            percentage: project.percentage,
        }}
        onSubmit={async (values) => {
            try {
                const result = await updateProjects(values);
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
            if (!values.description) {
                errors.description = 'Content is Required';
            }

            if (!values.name) {
                errors.name = 'Name is Required';
            }

            return errors;
        }}
    >
        {({ isSubmitting }) => (
            <Form onChange={() => setIsChanged(true)}>
                <h1 className="h3 mb-3 font-weight-normal">Edit Project - {project.id} </h1>
                <Row>
                    <FormGroup as={Col}>
                        <FormLabel>Name</FormLabel>
                        <Field id="name" className="form-control" name="name" placeholder="name" />
                        <ErrorMessage name="name" component="div" />
                    </FormGroup>

                    <FormGroup as={Col}>
                        <FormLabel>Link</FormLabel>
                        <Field id="link" className="form-control" name="link" placeholder="Link Url" />
                        <ErrorMessage name="link" component="div" />
                    </FormGroup>
                    <FormGroup as={Col}>
                        <FormLabel>Percentage</FormLabel>
                        <Field as="select" className="form-control" name="percentage">
                            <option value="50">50%</option>
                            <option value="80">80%</option>
                            <option value="100">100%</option>
                        </Field>
                        <ErrorMessage name="percentage" component="div" />
                    </FormGroup>
                </Row>

                <Row>
                    <FormGroup as={Col}>
                        <FormLabel>Description</FormLabel>
                        <Field id="description" name="description" className="form-control" placeholder="Description" >
                            {({ field: { value }, form: { setFieldValue } }) => (
                                <RichField
                                    content={value}
                                    handleChange={c => {
                                        setFieldValue('description', c);
                                        if (!isChanged) setIsChanged(true);
                                    }}
                                />
                            )}
                        </Field>
                        <ErrorMessage name="description" component="div" />
                    </FormGroup>
                </Row>

                <Row>
                    <FormGroup as={Col}>
                        <FormLabel>Contribution</FormLabel>
                        <Field id="contribution" name="contribution" className="form-control" placeholder="Contribution" >
                            {({ field: { value }, form: { setFieldValue } }) => (
                                <RichField
                                    content={value}
                                    handleChange={c => {
                                        setFieldValue('contribution', c);
                                        if (!isChanged) setIsChanged(true);
                                    }}
                                />
                            )}
                        </Field>
                        <ErrorMessage name="contribution" component="div" />
                    </FormGroup>
                </Row>

                <SubmitButton isSubmitting={isSubmitting} isChanged={isChanged} isUpdated={isUpdated} />

            </Form>
        )}
    </Formik>
}

export default ProjectForm;