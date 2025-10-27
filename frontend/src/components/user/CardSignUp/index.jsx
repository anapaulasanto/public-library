import { useContext } from "react";
import { useRegister } from "../../../hooks/auth";
import { FormHeader } from "../CardLogin/FormHeader"
import { FormSignUp } from "./Form"
import { Link } from "react-router-dom"

export const CardSignUp = () => {
    const { handleRegister, error } = useRegister('USER');
    let displayError = null;

    if (error) {
        if (error.response && (error.response.status === 400 || error.response.status === 409)) {
            displayError = "Esse email já está sendo utilizado.";
        } else {
            displayError = "Não foi possível conectar ao servidor. Tente novamente.";
        }
    } 

    return (
        <section className="z-10 bg-white w-7/8 rounded-xl px-6 pb-3 shadow-md lg:w-1/3 flex flex-col">
            <FormHeader title="Criar Conta" />
            <FormSignUp
                formSubmit={handleRegister}
                error={displayError}
            />
            <p className="text-[1rem] text-gray-500 text-center py-2">Já tem uma conta?
                <Link to="/auth/user/login">
                    <span className="text-blue-500 font-semibold hover:underline"> Entre aqui
                    </span>
                </Link>
            </p>
        </section>
    )
}