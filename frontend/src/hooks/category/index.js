import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { fetchCategory, createCategory, updateCategory, deleteCategory } from "../../services/category/index.js"

export const useCategoryCatalog = () => {
    return useQuery({
        queryKey: ['categoryCatalog'],
        queryFn: fetchCategory,
    })
}

export const useAddCategory = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (data) => createCategory(data),
        onSuccess: () => {
            queryClient.invalidateQueries(['categoryCatalog']);
        }
    });

    return {
        handleAddCategory: mutation.mutate,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError,
        error: mutation.error?.message
    };
}

export const useDeleteCategory = (categoryId) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: () => deleteCategory(categoryId),

        onSuccess: () => {
            console.log("Categoria excluida com sucesso");
            queryClient.invalidateQueries({ queryKey: ['categoryCatalog'] });
        },
    });

    return {
        handleDeleteCategory: mutation.mutate,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError,
        error: mutation.error?.message
    };
}

export const useEditCategory = (categoryId) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (data) => updateCategory(categoryId, data),

        onSuccess: () => {
            queryClient.invalidateQueries(['categoryCatalog']);
        }
    });

    return {
        handleEditCategory: mutation.mutate,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError,
        error: mutation.error?.message
    };
}