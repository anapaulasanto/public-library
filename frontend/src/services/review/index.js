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

export const deleteReview = async (reviewId) => {
    const { data } = await axios.delete(`api/v1/review/${reviewId}`);
    console.log("Avaliação deletada!", data);
    return data;
}

export const updateReview = async (reviewId, reviewData) => {
    const { data } = await axios.put(`api/v1/review/${reviewId}`, reviewData);
    console.log("Avaliação atualizada!", data);
    return data;
}