import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { fetchRentalsByUser, saveRental } from "../../services/rental";
import { use } from "react";

export const useSaveRental = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (rentalData) => saveRental(rentalData),

        onSuccess: (data) => {
            console.log("Aluguel realizado com sucesso!", data);
            queryClient.invalidateQueries({ queryKey: ['authUser', 'users', 'book'] });
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