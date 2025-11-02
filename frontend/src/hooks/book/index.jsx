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

    const mutation = useMutation({
        mutationFn: (bookId) => deleteBook(bookId),
        onSuccess: () => {
            console.log("Livro excluido com sucesso");
            queryClient.invalidateQueries({ queryKey: ['booksAdmin'] });
        },

        onError: (error) => {
            console.log("Erro ao excluir livro", error);
        }
    })

    return {
        handleDeleteBook: mutation.mutateAsync,
        error: mutation.error
    }
}