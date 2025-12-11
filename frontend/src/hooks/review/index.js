import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchReviews, saveReview, deleteReview, updateReview } from "../../services/review/index.js";

export const useSaveReview = (bookId) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (review) => saveReview(review),

        onSuccess: () => {
            console.log("Avaliação publicada com sucesso");
            queryClient.invalidateQueries({ queryKey: ['reviewsBook'] });
            if (bookId) {
                queryClient.invalidateQueries({ queryKey: ['book', bookId] });
            }
        },

        onError: (error) => {
            console.log("Erro ao publicar avaliação", error);
        }
    })

    return {
        handleSaveReview: mutation.mutateAsync,
        error: mutation.error
    }
}

export const useReviews = () => {
    return useQuery({
        queryKey: ['reviewsBook'],
        queryFn: fetchReviews,
    })
}

export const useDeleteReview = (reviewId, bookId) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: () => deleteReview(reviewId),

        onSuccess: () => {
            console.log("Avaliação excluída com sucesso");
            queryClient.invalidateQueries({ queryKey: ['reviewsBook'] });
            if (bookId) {
                queryClient.invalidateQueries({ queryKey: ['book', bookId] });
            }
        },

        onError: (error) => {
            console.log("Erro ao excluir avaliação", error);
        }
    });

    return {
        handleDeleteReview: mutation.mutateAsync,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError,
        error: mutation.error
    };
}

export const useUpdateReview = (reviewId, bookId) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (reviewData) => updateReview(reviewId, reviewData),

        onSuccess: () => {
            console.log("Avaliação atualizada com sucesso");
            queryClient.invalidateQueries({ queryKey: ['reviewsBook'] });
            if (bookId) {
                queryClient.invalidateQueries({ queryKey: ['book', bookId] });
            }
        },

        onError: (error) => {
            console.log("Erro ao atualizar avaliação", error);
        }
    });

    return {
        handleUpdateReview: mutation.mutateAsync,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError,
        error: mutation.error
    };
}