import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Loading } from "../../components/Loading";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";

// Lógica para uma rota pública, como login e registro. Se tiver logado, redireciona para o dashboard ou profile
export const PublicRoutes = () => {
    const { isLogged, isLoadingSession, role } = useContext(AuthContext);
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();

    //agenda a execução do redirecionamento para depois que o componente seja montado, a partir das dependencias
    useEffect(() => {
        if (!isLoadingSession) {
            if (isLogged) {
                const redirectParam = searchParams.get('redirect');
                const redirectTo = redirectParam || (role === 'ADMIN' ? '/admin/dashboard' : '/user/profile');

                setTimeout(() => {
                    navigate(redirectTo, { replace: true });
                }, 1000);
            }
        }
    }, [isLogged, isLoadingSession, navigate, role, searchParams]);

    if (isLoadingSession) {
        //se estiver carregando a sessão, mostra loading
        return <Loading />;
    }

    if (!isLogged) {
        //se a sessão foi carregada, mas não está logado, exibe as rotas publicas (login e registro)
        return <Outlet />;
    }

    return null;
};
