import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { fetchRentalsByUser, saveRental, checkUpcomingReturns } from "../../services/rental";
import { use } from "react";

export const useSaveRental = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (rentalData) => saveRental(rentalData),

        onSuccess: (data, variables) => {
            console.log("Aluguel realizado com sucesso!", data);
            // Invalida caches relevantes para refletir o novo aluguel
            const userId = queryClient.getQueryData(['authUser'])?.id;
            if (userId) {
                queryClient.invalidateQueries({ queryKey: ['rentals', userId] });
                queryClient.invalidateQueries({ queryKey: ['rentalsByUser', userId] });
            }
            if (variables?.bookId) {
                queryClient.invalidateQueries({ queryKey: ['book', variables.bookId] });
            }
        },

        onError: (error) => {
            console.log("Erro ao alugar livro:", error);
        },
    })

    return {
        handleSaveRental: mutation.mutate,
        isSuccess: mutation.isSuccess,
        error: mutation.error,
        isSubmitting: mutation.isPending,
        isError: mutation.isError,
        data: mutation.data,
    }
}

export const useFetchRentalsByUser = (userId) => {
    return useQuery({
        queryKey: ['rentals', userId],
        queryFn: () => fetchRentalsByUser(userId),
        enabled: !!userId,
    })
}

export const useCheckUpcomingReturns = (userId) => {
    return useQuery({
        queryKey: ['upcomingReturns', userId],
        queryFn: () => checkUpcomingReturns(userId),
        enabled: !!userId,
        refetchOnMount: true,
        refetchOnWindowFocus: false,
    })
}