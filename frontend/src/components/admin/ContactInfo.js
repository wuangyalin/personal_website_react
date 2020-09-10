import React, { useState, useEffect } from 'react';
import ContactInfoForm from '../form/contactinfo.form';


const ContactInfo = () => {
    const [contactInfos, setContactInfos] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('api/personalinfo');
            const jsonResult = await result.json();
            console.log(jsonResult);
            setContactInfos(jsonResult);
            setIsLoaded(true);
        }
        fetchData();
    }, []);

    return (
        isLoaded ?
            <React.Fragment>
                {contactInfos.map((contactInfo, index) => {
                    return <ContactInfoForm  contactInfo={contactInfo} key={index} />
                })}

            </React.Fragment>
            :
            <React.Fragment>
                Loading...
        </React.Fragment>
    );
};

export default ContactInfo;