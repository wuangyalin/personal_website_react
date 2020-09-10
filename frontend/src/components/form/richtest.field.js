import React from 'react';
import { Editor } from '@tinymce/tinymce-react';


const RichtEditor = ({ content, handleChange }) => {
    // console.log(content);
    // const handleEditorChange = (c, editor) => {
    //     setFieldValue
    // }

    return (
        <Editor
            apiKey="o2no6hvd8hqeneb0ialjgelbhliwogjg9uru6d4644z505c5"
            initialValue={content}
            init={{
                height: 300,
                menubar: false
            }}
            onEditorChange={handleChange}
        />
    );
}

export default RichtEditor;