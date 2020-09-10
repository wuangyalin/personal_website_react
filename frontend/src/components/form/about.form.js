import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { updateAbout } from '../../services/admin.update';
import { Row, FormGroup, FormLabel, Col } from 'react-bootstrap';
import { SubmitButton } from './form.button';
import RichField from './richtest.field';





const AboutForm = ({ aboutSection }) => {
    const [isChanged, setIsChanged] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);

    const initialValues = {
        id: aboutSection._id,
        name: aboutSection.name,
        description: aboutSection.description,
    };

    const submitForm = async (values) => {
        try {
            const result = await updateAbout(values.description, values.name, values.id);
            if (result) {
                setIsUpdated(true);
                setIsChanged(false);
            } else {
                console.log('Somthing went wrong');
            }

        } catch (error) {
            console.log(error);
        }
    };

    const validations = (values) => {
        const errors = {};
        if (!values.description) {
            errors.description = 'Daescription is Required';
        }

        if (!values.name) {
            errors.name = 'Name is Required';
        }

        return errors;
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={submitForm}
            validate={validations}
        >
            {({ isSubmitting }) => (
                <Form onChange={() => setIsChanged(true)}>

                    <Row>
                        <FormGroup as={Col}>
                            <FormLabel>Name</FormLabel>
                            <Field id="name" className="form-control" name="name" placeholder="name" />
                            <ErrorMessage name="name" component="div" />
                        </FormGroup>
                    </Row>

                    <Row>
                        <FormGroup as={Col}>
                            <FormLabel>Description</FormLabel>
                            {/* <Field component="textarea" rows={10} id="description" name="description" className="form-control" placeholder="description" /> */}
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

                    <SubmitButton isSubmitting={isSubmitting} isChanged={isChanged} isUpdated={isUpdated} />

                </Form>
            )}
        </Formik>
    )
}

export default AboutForm;