import axios from "axios";

export const saveReview = async (review) => {
    const { data } = await axios.post("api/v1/review", review);
    console.log("avaliação cadastrada!", data);
    return data
}