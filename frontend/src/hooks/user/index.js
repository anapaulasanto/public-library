import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { deleteUser, fetchAllUsers, fetchUserRentals, fetchUserReviews, updateUser } from "../../services/user/index.js"

// ============ EXIBIR TODOS OS USUARIOS ============
export const useAllUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: fetchAllUsers,
        staleTime: 1000 * 60 * 5, // 5 minutos
        cacheTime: 1000 * 60 * 10, // 10 minutos
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
        staleTime: 1000 * 60 * 2, // 2 minutos
        cacheTime: 1000 * 60 * 5, // 5 minutos
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
        staleTime: 1000 * 60 * 3, // 3 minutos
        cacheTime: 1000 * 60 * 8, // 8 minutos
    })
}

// ============ ATUALIZAR UM USUARIO ============
export const useUserUpdate = (userIdToUpdate) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (updateData) => updateUser(userIdToUpdate, updateData),         

        onSuccess: () => {
            console.log("Usuário atualizado");
            queryClient.invalidateQueries({ queryKey: ['authUser'] });
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },

        onError: (error) => {
            console.log("Erro ao atualizar usuário:", error);  
        },
    });

    return {
        handleUpdateUser: mutation.mutateAsync,
        error: mutation.error,
        isSubmitting: mutation.isLoading,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError
    };
}

// ============ EXCLUIR UM USUARIO ============
export const useUserDelete = (userIdToDelete) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: () => deleteUser(userIdToDelete),

        onSuccess: () => {
            console.log("Usuário removido com sucesso");
            queryClient.invalidateQueries({ queryKey: ['authUser'] });
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },

        onError: (error) => {
            console.log("Erro ao remover usuário:", error);
        },
    });

    return {
        handleDeleteUser: mutation.mutateAsync,
        error: mutation.error,
        isSubmitting: mutation.isLoading,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError
    };
}