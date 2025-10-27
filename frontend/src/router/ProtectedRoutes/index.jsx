import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Loading } from "../../components/Loading";
import { Outlet, useNavigate } from "react-router-dom";

// Lógica para uma rota protegida, que exigem autenticação, Redireciona para o login se o usuário não estiver logado
export const ProtectedRoutes = ({ role }) => {
    const { user, isLogged, isLoadingSession } = useContext(AuthContext);
    const navigate = useNavigate()

    useEffect(() => {
        if (!isLoadingSession) {
            //Se não estiver autenticado, redireciona para o login de usuário ou admin
            if (!isLogged) {
                const redirectTo = role === 'ADMIN' ? '/auth/admin/login' : '/auth/user/login';

                setTimeout(() => {
                    navigate(redirectTo);
                }, 1000);
            }
        }
    }, [isLogged, isLoadingSession, role, navigate]);

    if (isLoadingSession) {
        //se estiver carregando a sessão, mostra loading
        return <Loading />;
    }

    if (isLogged) {
        //se a sessão foi carregada e está logado, exibe as rotas protegidas (dashboard, profile, etc)
        return <Outlet />;
    }

    return null;

};