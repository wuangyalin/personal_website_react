import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { updateContactInfo } from '../../services/admin.update';
import { Row, FormGroup, FormLabel, Col } from 'react-bootstrap';
import SubmitButton from './button.submit';



const ContactInfoForm = ({ contactInfo }) => {
    const [isChanged, setIsChanged] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);

    return <Formik
        initialValues={{
            id: contactInfo._id,
            content: contactInfo.content,
        }}
        onSubmit={async (values) => {
            try {
                const result = await updateContactInfo(values);
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

            return errors;
        }}
    >
        {({ isSubmitting }) => (
            <Form onChange={() => setIsChanged(true)}>
                <h1 className="h3 mb-3 font-weight-normal">Edit Contact - {contactInfo.type} </h1>

                <Row>
                    <FormGroup as={Col}>
                        <FormLabel>Content</FormLabel>
                        <Field id="content" name="content" className="form-control" placeholder="Content" />
                        <ErrorMessage name="content" component="div" />
                    </FormGroup>
                </Row>

                <SubmitButton isSubmitting={isSubmitting} isChanged={isChanged} isUpdated={isUpdated} />
            </Form>
        )}
    </Formik>
}

export default ContactInfoForm;