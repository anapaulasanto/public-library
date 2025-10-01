import bgImg from "../../assets/bg-auth.jfif"
import { FormHeader } from "../CardLogin/FormHeader"
import { FormSignUp } from "./Form"
import { Link } from "react-router-dom"

export function CardSignUp() {
    return (
        <main style={{ backgroundImage: `url(${bgImg})` }} class="min-h-screen bg-cover bg-center flex flex-col items-center justify-center py-2">
            <div class="absolute inset-0 bg-black/50 min-h-full" />
            <section class="z-10 bg-white w-7/8 rounded-xl p-6 py-1 shadow-md lg:w-1/3">
                <FormHeader title="Criar Conta" />
                <FormSignUp />
                <p class="text-[1rem] text-gray-500 text-center py-2">Já tem uma conta?
                    <Link to="/login">
                        <span class="text-blue-500 font-semibold hover:underline"> Entre aqui
                        </span>
                    </Link>
                </p>
            </section>
        </main>
    )
}