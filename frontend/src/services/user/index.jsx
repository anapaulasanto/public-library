import axios from "axios"

// =========== GET DE USER =============
export const fetchAllUsers = async () => {
    const { data } = await axios.get("api/v1/user/all");
    console.log("usuarios cadastrados:", data);
    return data;
};

export const fetchUserData = async (userId) => {
    const { data } = await axios.get(`api/v1/user/${userId}`);
    return data;
};

export const fetchUserRentals = async (userId) => {
    const { data } = await axios.get(`api/v1/rental/user/${userId}`);
    console.log("alugueis:", data);
    
    return data;
};

export const fetchUserReviews = async (userId) => {
    const { data } = await axios.get(`api/v1/user/${userId}/reviews`);
    console.log("avaliações: ", data);
    return data;
};

// =========== UPDATE DE USER =============
export const updateUser = async (userId, data) => {
    const res = await axios.put(`api/v1/user/${userId}`, data);
    return res.data;
};