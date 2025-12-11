import { useQuery } from "@tanstack/react-query"
import { fetchBooksApi } from "../../../services/book/api"

export const useBooksApi = (query) => {
    return useQuery({
        queryKey: ['booksApi', query],
        queryFn: () => fetchBooksApi(query),
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5, // 5 minutos - dados considerados "frescos"
        cacheTime: 1000 * 60 * 10, // 10 minutos - tempo de cache
    })
}