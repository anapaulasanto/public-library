import axios from "axios";

export const fetchBooksApi = async (query) => {
    const { text, type } = query;
    let key = 'AIzaSyC3yvvAv-g6uIAEbAuo1b-S05CffD1SFfM';
    let search = "bestseller&download=epub&filter=partial";
    
    const formattedText = text.replace(/\s+/g, '+');

    if (type === "title") {
        search = formattedText;
    } else if (type === "author") {
        search = `inauthor:${formattedText}`;
    } else if (type === "subject") {
        search = `subject:${formattedText}`;
    }

    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=8&key=${key}`;
    const { data } = await axios.get(url, { withCredentials: false });
    return data.items || [];
}