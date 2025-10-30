import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { fetchAllUsers, fetchUserRentals, fetchUserReviews, updateUser } from "../../services/user"

// ============ TODOS OS USUARIOS ============
export const useAllUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: fetchAllUsers,
    });
};

// ============ ALUGUEIS DE UM USUARIO ============
export const useUserRentals = () => {
    const queryClient = useQueryClient();
    const userId = queryClient.getQueryData(['authUser'])?.id

    return useQuery({
        queryKey: ['rentalsByUser', userId],
        queryFn: () => fetchUserRentals(userId),
        retry: false,
        enabled: !!userId,
    });
};

// ============ AVALIAÇÕES DE UM USUARIO ============
export const useUserReviews = () => {
    const queryClient = useQueryClient();
    const userId = queryClient.getQueryData(['authUser'])?.id;

    return useQuery({
        queryKey: ['reviewsByUser', userId],
        queryFn: () => fetchUserReviews(userId),
        retry: false,
        enabled: !!userId,
    })
}

export const useUserUpdate = () => {
    const queryClient = useQueryClient();
    const userId = queryClient.getQueryData(['authUser'])?.id;

    const mutation = useMutation({
        mutationFn: (updateData) => updateUser(userId, updateData), 

        onSuccess: () => {
            console.log("Usuário atualizado");
            queryClient.invalidateQueries({ queryKey: ['authUser'] });
        },

        onError: (error) => {
            console.log("Erro ao atualizar usuário:", error);
            
        }
    });

    return {
        handleUpdate: mutation.mutateAsync,
        error: mutation.error,
        isSubmitting: mutation.isLoading,
    };
}