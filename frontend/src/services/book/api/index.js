import axios from "axios";

export const fetchBooksApi = async (query) => {
    const { text, type } = query;
    let key = 'AIzaSyC3yvvAv-g6uIAEbAuo1b-S05CffD1SFfM';
    let search = "bestseller&download=epub&filter=partial";

    if (type === "title") {
        search = text;
    } else if (type === "author") {
        search = `inauthor:${text}`;
    } else if (type === "subject") {
        search = `subject:${text}`;
    }

    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=8&key=${key}`
    const { data } = await axios.get(url, { withCredentials: false });
    return data.items || [];
}