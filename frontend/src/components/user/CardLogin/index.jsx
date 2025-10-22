import { FormLogin } from "./Form"
import { FormHeader } from "./FormHeader"
import { Link } from "react-router-dom"
export const CardLogin = () => {
    return (
        <section className="flex flex-col justify-center z-10 bg-white w-7/8 h-[80%] pb-2 rounded-xl px-6 space-y-4 shadow-md xl:w-1/3 2xl:h-[65%]">
            <FormHeader title="BiblioTech" subtitle="Faça login para acessar seu acervo digital" />
            <FormLogin />
            <p className="text-[1rem] text-gray-500 text-center">Não tem uma conta?
                <Link to="/auth/user/sign-up">
                    <span className="text-blue-500 font-semibold hover:underline"> Cadastre-se aqui</span>
                </Link>
            </p>
        </section>
    )
}