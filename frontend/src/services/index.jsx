import axios from "axios"

export const fetchUserData = async (userId) => {
    const { data } = await axios.get(`user/${userId}`);
    return data;
};

export const fetchUserRentals = async (userId) => {
    const { data } = await axios.get(`/rental/user/${userId}`);
    return data;
};