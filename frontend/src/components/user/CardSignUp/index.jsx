import { FormHeader } from "../CardLogin/FormHeader"
import { FormSignUp } from "./Form"
import { Link } from "react-router-dom"

export const CardSignUp = () => {
    return (
            <section className="z-10 bg-white w-7/8 rounded-xl px-6 pb-3 shadow-md lg:w-1/3 flex flex-col">
                <FormHeader title="Criar Conta" />
                <FormSignUp />
                <p className="text-[1rem] text-gray-500 text-center py-2">Já tem uma conta?
                    <Link to="/auth/user/login">
                        <span className="text-blue-500 font-semibold hover:underline"> Entre aqui
                        </span>
                    </Link>
                </p>
            </section>
    )
}