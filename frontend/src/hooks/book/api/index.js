import { useQuery } from "@tanstack/react-query"
import { fetchBooksApi } from "../../../services/book/api"

export const useBooksApi = (query) => {
    return useQuery({
        queryKey: ['booksApi', query],
        queryFn: () => fetchBooksApi(query),
        refetchOnWindowFocus: false,
        
    })
}