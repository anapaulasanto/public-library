import axios from "axios";

export const saveRental = async (rentalData) => {
    const { data } = await axios.post("/api/v1/rental", rentalData);
    return data;
}

export const fetchRentalsByUser = async (userId) => {
    const { data } = await axios.get(`/api/v1/rental/user/${userId}`);
    console.log("alugueis desse usuario: ", data);
    return data;
}