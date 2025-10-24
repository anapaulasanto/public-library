import React from "react";
import { FormHeader } from "../../user/CardLogin/FormHeader";
import { Link } from "react-router-dom";
import { FormSignUp } from "../../user/CardSignUp/Form";

export const CardSignUpAdmin = () => {
    return (
        <section className="z-10 bg-white w-7/8 rounded-xl px-6 pb-3 shadow-md lg:w-1/3 flex flex-col">
            <FormHeader subtitle="Administrador" classname="font-semibold text-gray-900" />
            <FormSignUp />
            <p className="text-[1rem] text-gray-500 text-center py-2">Já tem uma conta?
                <Link to="/auth/admin/login">
                    <span className="text-blue-500 font-semibold hover:underline"> Entre aqui
                    </span>
                </Link>
            </p>
        </section>
    )
};
