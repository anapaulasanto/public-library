import axios from "axios"

export const fetchCategory = async () => {
    const { data } = await axios.get("api/v1/category/all");
    console.log("categorias cadastradas: ", data);
    return data;
}