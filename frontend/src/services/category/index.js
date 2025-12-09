import axios from "axios"

export const fetchCategory = async () => {
    const { data } = await axios.get("api/v1/category/all");
    console.log("categorias cadastradas: ", data);
    return data;
}

export const createCategory = async (categoryData) => {
    const { data } = await axios.post("api/v1/category", categoryData);
    console.log("categoria criada: ", data);
    return data;
}

export const updateCategory = async (categoryId, categoryData) => {
    const { data } = await axios.put(`api/v1/category/${categoryId}`, categoryData);
    console.log("categoria atualizada: ", data);
    return data;
}

export const deleteCategory = async (categoryId) => {
    const { data } = await axios.delete(`api/v1/category/${categoryId}`);
    console.log("categoria deletada: ", data);
    return data;
}