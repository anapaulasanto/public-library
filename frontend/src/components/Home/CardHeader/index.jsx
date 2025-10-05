import { Link } from "react-router-dom";

export function CardHeader() {
    return (
        <div class="absolute max-w-[80%] text-center space-y-8 animate-slide-up lg:flex-col ">
            <h1 class="text-black text-5xl font-bold">Bem-vindo à <span class="font-bold text-gradient">BiblioTech</span></h1>
            <p class="text-gray-700 text-lg">Descubra um mundo de conhecimento ao seu alcance. <br /> Acesse milhares de livros, conecte-se com outros leitores e transforme sua experiência de leitura.</p>
            <div class="flex flex-col gap-5 font-semibold lg:flex-row items-center">
                <Link class="w-full" to="/auth/user/sign-up">
                    <button class="text-white bg-gradient-to-r from-sky-900 to-emerald-700 w-3/4 h-[4rem] rounded-md hover:text-black cursor-pointer">Começar agora</button>
                </Link>
                <button class="text-blue-500 bg-white w-3/4 h-[4rem] rounded-md hover:bg-gray-200 cursor-pointer">Explorar Catálogo</button>
            </div>
        </div>
    )
}