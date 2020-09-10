import React from 'react';
import { Row, FormGroup, Button, Col } from 'react-bootstrap';


const SubmitButton = ({isSubmitting, isChanged, isUpdated}) => {
    return (
        <Row>
            <FormGroup as={Col}>
                <Button variant="primary" type="submit" disabled={isSubmitting || !isChanged}>Update </Button>
                {isUpdated ? <label className="text-success">Updated</label> : ''}
            </FormGroup>
        </Row>
    )
}

export default SubmitButton;