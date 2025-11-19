import { useQuery } from "@tanstack/react-query"
import { fetchBooksApi } from "../../../services/book/api"

export const useBooksApi = () => {
    return useQuery({
        queryKey: ['booksApi'],
        queryFn: fetchBooksApi,
    })
}