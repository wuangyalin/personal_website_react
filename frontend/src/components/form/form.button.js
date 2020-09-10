import React from 'react';
import { Button } from 'react-bootstrap';


export const SubmitButton = ({ isSubmitting, isChanged, isUpdated, isNewForm }) => {
    return (
        <React.Fragment>
            <Button variant="primary" type="submit" disabled={isSubmitting || !isChanged}>{isNewForm ? 'Add' : 'Update'} </Button>
            {isUpdated ? <label className="text-success">{isNewForm ? 'Added' : 'Updated'}</label> : ''}
        </React.Fragment>
    )
}

export const AddButton = ({ title }) => {
    return (
        <Button variant="info" >Add {title}</Button >
    );
}

export const RemoveButton = ({ title }) => {
    return (
        <Button variant="danger" >{title} </Button >
    )
}
