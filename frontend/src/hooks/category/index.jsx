import { useQuery } from "@tanstack/react-query"
import { fetchCategory } from "../../services/category"

export const useCategoryCatalog = () => {
    return useQuery({
        queryKey: ['categoryCatalog'],
        queryFn: fetchCategory,
    })
}