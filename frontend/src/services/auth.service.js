import axios from 'axios';

export const login = async (username, password) => {
    const response = await axios.post("api/auth/signin", { username, password });
    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
}

export const logout = () => {
    localStorage.removeItem("user");
    return true;
}

export const register = (username, email, password) => {
    return axios.post("api/auth/signup", {
        username,
        email,
        password
    });
}

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));;
}
