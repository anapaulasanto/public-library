import axios from "axios"

export const fetchAllUsers = async () => {
    const { data } = await axios.get("api/v1/user/all");    
    return data;
};

export const fetchUserData = async (userId) => {
    const { data } = await axios.get(`api/v1/user/${userId}`);
    return data;
};

export const fetchUserRentals = async (userId) => {
    const { data } = await axios.get(`api/v1/rental/user/${userId}`);
    return data;
};
