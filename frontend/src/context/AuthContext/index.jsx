import { useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { checkAuthStatus } from "../../services/auth/index.js";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const {
        data: user,
        isLoading,

    } = useQuery({
        queryKey: ['authUser'],
        queryFn: checkAuthStatus,
        retry: false, //n tenta refazer a requisicao se der falha (401 ou 404)
        refetchOnWindowFocus: false, //n refaz a requisicao quando a janela ganha foco/ muda de aba, n precisa disso em uma rota de login
        staleTime: Infinity, //os dados n ficam "obsoletos", n precisa refazer a requisicao. Uma vez que ta logado, considere essa info frsca pra sempre ate que o usuario faça logout
    })

    const isLogged = !!user; //oq retornar em user(retorno da funcao) vai ser um objeto com os dados do usuario logado ou null(se n tiver ninguem logado). Entao se tiver algo em user, isLogged é true, senao é false, ele apenas transforrma em boleano, sem alterar o valor original
    const role = user?.role || null; //'user' ou 'admin'

    return (
        <AuthContext.Provider value={{
            user,
            isLoadingSession: isLoading,
            isLogged, 
            role,
        }}>
            {children}
            
        </AuthContext.Provider>
    )
}