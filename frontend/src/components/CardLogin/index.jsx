import { FormLogin } from "./Form"
import bgImg from "../../assets/bg-auth.jfif"
import { FormHeader } from "./FormHeader"
import { Link } from "react-router-dom"

export function CardLogin() {
    return (
        <main style={{ backgroundImage: `url(${bgImg})` }} class="min-h-screen bg-cover bg-center flex flex-col items-center justify-center">
            <div class="absolute inset-0 bg-black/50" />
            <section class="z-10 bg-white w-7/8 rounded-xl p-6 py-12 space-y-4 shadow-md lg:w-1/3">
                <FormHeader title="BiblioTech" subtitle="Faça login para acessar seu acervo digital" />
                <FormLogin />
                <p class="text-[1rem] text-gray-500 text-center">Não tem uma conta? 
                    <Link to="/sign-up">
                        <span class="text-blue-500 font-semibold hover:underline"> Cadastre-se aqui</span>
                    </Link> 
                </p>
            </section>
        </main>
    )
}