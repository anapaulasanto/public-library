import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom"
import { loginAdmin, loginUser, logoutUser, registerAdmin, registerUser } from "../../services/auth";

// ========== LOGAR USUARIO OU ADMIN ==========

export const useLogin = (userType = 'USER') => {
    const queryClient = useQueryClient();
    const isUser = userType === 'USER'; //true se for usuario comum, false se for admin

    const mutation = useMutation({
        mutationFn: isUser ? loginUser : loginAdmin,

        onSuccess: (data) => {
            if (data && data.token) {
                console.log("Token recebido com sucesso do login", data.token);
                queryClient.invalidateQueries({ queryKey: ['authUser'] }); //roda a query que tiver essa key, passando agora o usuario logado

            } else {
                console.error('Sucesso no login, mas nenhum token recebido:', data);  
            }
        },

        onError: (error) => {
            console.error('Erro no login:', error);
        }
    })

    return {
        handleLogin: mutation.mutateAsync,
        isLoading: mutation.isPending,
        error: mutation.error,
    };
};

// ========== REGISTRAR USUARIO OU ADMIN ==========

export const useRegister = (userType = 'USER') => {
    const queryClient = useQueryClient();

    const isUser = userType === 'USER';

    const mutation = useMutation({
        mutationFn: isUser ? registerUser : registerAdmin,

        onSuccess: (user) => {
            console.log("Usuario registrado com sucesso", user);
            queryClient.setQueryData(['authUser'], user); //seta o cache [authUser] com os dados do usuario registrado, ao inves de invalidar a query e fazer uma nova requisicao como no login
        },

        onError: (error) => {
            console.error('Erro no registro:', error);
        }
    })

    return {
        handleRegister: mutation.mutateAsync,
        error: mutation.error,
    };
}

// ========== DESLOGAR USUARIO OU ADMIN ==========

export const useLogout = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: logoutUser,

        onSuccess: () => {
            const isUser = queryClient.getQueryData(['authUser'])?.role === 'USER';
            queryClient.setQueryData(['authUser'], null);

            setTimeout(() => {
                navigate(isUser ? '/auth/user/login' : '/auth/admin/login');
            }, 1000);
        },

        onError: (error) => {
            console.error('Erro no logout:', error);
            queryClient.setQueryData(['authUser'], null);
        }
    });

    return {
        handleLogout: mutation.mutateAsync,
        isLoading: mutation.isPending,
    };
};