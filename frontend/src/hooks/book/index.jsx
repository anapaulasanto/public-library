import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteBook, fetchBooks, getBookById, getReviewsByBook } from "../../services/book";

export const useBooksAdmin = () => {
    return useQuery({
        queryKey: ['booksAdmin'],
        queryFn:  fetchBooks,
    })
}

export const useBookId = (id) => {
    return useQuery({
        queryKey: ['book'],
        queryFn: () => getBookById(id),
    })
}

export const useReviewesBook = (id) => {
    return useQuery({
        queryKey: ['reviewsBook'],
        queryFn: () => getReviewsByBook(id),
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