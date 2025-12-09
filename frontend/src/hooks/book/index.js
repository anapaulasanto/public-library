import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteBook, fetchBooks, getBookById, getReviewsByBook, updateBook } from "../../services/book/index.js";

export const useBooksAdmin = () => {
    return useQuery({
        queryKey: ['booksAdmin'],
        queryFn:  fetchBooks,
    })
}

export const useBookId = (id) => {
    return useQuery({
        queryKey: ['book', id],
        queryFn: () => getBookById(id),
        enabled: !!id,
    })
}

export const useReviewesBook = (id) => {
    return useQuery({
        queryKey: ['reviewsBook', id],
        queryFn: () => getReviewsByBook(id),
        enabled: !!id,
        retry: false,
    })
}

export const useDeleteBook = (bookId) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: () => deleteBook(bookId),
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

export const useEditBook = (bookId) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (bookData) => updateBook(bookId, bookData),
        onSuccess: () => {
            console.log("Livro editado com sucesso");
            queryClient.invalidateQueries({ queryKey: ['booksAdmin'] });
            queryClient.invalidateQueries({ queryKey: ['book', bookId] });
        },
        onError: (error) => {
            console.log("Erro ao editar livro", error);
        }
    });

    return {
        handleEditBook: mutation.mutateAsync,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError,
        error: mutation.error
    };
}