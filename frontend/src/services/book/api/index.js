import axios from "axios";

export const fetchBooksApi = async () => {
    const { data } = await axios.get("https://www.googleapis.com/books/v1/volumes?q=bestseller&maxResults=8&download=epub&filter=partial&key=AIzaSyC3yvvAv-g6uIAEbAuo1b-S05CffD1SFfM",{ withCredentials: false });
    console.log(data.items);
    return data.items;
}