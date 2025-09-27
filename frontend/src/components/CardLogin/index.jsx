import { Form } from "./Form"
import bgImg from "../../assets/bg-auth.jfif"
import { FormHeader } from "./FormHeader"

export function CardLogin() {
    return (
        <main style={{ backgroundImage: `url(${bgImg})` }} class="min-h-screen bg-cover bg-center flex flex-col items-center justify-center">
            <div class="absolute inset-0 bg-black/50" />
            <section class="z-10 bg-white w-7/8 rounded-xl p-6 py-12 space-y-4 shadow-md lg:w-1/3">
                <FormHeader />
                <Form />
                <p class="text-gray-500 text-sm text-center">Não tem uma conta? <span class="text-blue-500 font-semibold hover:underline">Cadastre-se aqui</span></p>
            </section>
        </main>
    )
}