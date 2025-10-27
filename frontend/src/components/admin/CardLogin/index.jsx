import React, { useContext } from "react";
import { FormHeader } from "../../user/CardLogin/FormHeader";
import { Link } from "react-router-dom";
import { FormLogin } from "../../user/CardLogin/Form"
import { useLogin } from "../../../hooks/auth";

export const CardLoginAdmin = () => {
    const { handleLogin, error } = useLogin('ADMIN');
    const displayError = error ? "Email ou senha de admin inválidos." : null;

    return (
        <section className="flex flex-col justify-center z-10 bg-white w-7/8 h-[80%] pb-5 rounded-xl px-6 space-y-4 shadow-md xl:w-1/3 2xl:h-[65%]">
            <FormHeader subtitle="Administrador" classname="font-semibold text-gray-900" />
            <FormLogin
                formSubmit={handleLogin}
                error={displayError}
            />
            <p className="text-[1rem] text-gray-500 text-center">Não tem uma conta?
                <Link to="/auth/admin/sign-up">
                    <span className="text-blue-500 font-semibold hover:underline"> Cadastre-se aqui</span>
                </Link>
            </p>
        </section>
    )
};
