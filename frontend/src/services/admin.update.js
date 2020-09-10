import axios from 'axios';

export const updateAbout = async (description, name, id) => {
    const response = await axios.post(`/api/sections/${id}/update`, { description, name });

    return response.data.success;
};


export const updateSkills = async (content, name, id) => {
    const response = await axios.post(`/api/skills/${id}/update`, { content, name });

    return response.data.success;
};

export const updateProjects = async (values) => {
    const { id,
        name,
        link,
        description,
        contribution,
        percentage } = values;
    const response = await axios.post(`/api/projects/${id}/update`, {
        name,
        link,
        description,
        contribution,
        percentage
    });

    if (response.data.name === name && response.data.link === link && response.data.description === description && response.data.contribution === contribution && response.data.percentage === percentage) {
        return true;
    }
    return false;
};

export const updateContactInfo = async (values) => {
    const { id, content } = values;

    const response = await axios.post(`/api/personalinfo/${id}/update`, { content });

    if (response.data.content === content) {
        return true;
    }
    return false;
};
