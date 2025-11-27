import axios from "axios";

export const saveReview = async (review) => {
    const { data } = await axios.post("api/v1/review", review);
    console.log("avaliação cadastrada!", data);
    return data
}

export const fetchReviews = async () => {
    const { data } = await axios.get("api/v1/review/all");
    return data
}