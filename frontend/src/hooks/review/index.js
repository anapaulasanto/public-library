import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchReviews, saveReview } from "../../services/review/index.js";

export const useSaveReview = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (review) => saveReview(review),

        onSuccess: () => {
            console.log("Avaliação publicada com sucesso");
            queryClient.invalidateQueries({ queryKey: ['reviewsBook'] });
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