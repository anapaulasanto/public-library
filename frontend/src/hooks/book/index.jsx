import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteBook, fetchBooks } from "../../services/book";

export const useBooksAdmin = () => {
    return useQuery({
        queryKey: ['booksAdmin'],
        queryFn:  fetchBooks,
    })
}

export const useDeleteBook = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteBook,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['booksAdmin'] });
        }
    })
}