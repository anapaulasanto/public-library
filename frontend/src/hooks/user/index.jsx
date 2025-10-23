import { useQuery } from "@tanstack/react-query"
import { fetchAllUsers, fetchUserData, fetchUserRentals } from "../../services/user"

export const useUserProfile = (userId) => {
    return useQuery({
        queryKey: ['user', userId],
        queryFn: () => fetchUserData(userId),
        enabled: !!userId, //garante que n chame essa funcao toda hora, so qnd precisar, no caso qnd userId n for nulo ou undefined
    });
};

export const useUserRentals = (userId) => {
    return useQuery({
        queryKey: ['rentals', userId],
        queryFn: () => fetchUserRentals(userId),
        enabled: !!userId,
    });
};

export const useAllUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: fetchAllUsers,
    });
};