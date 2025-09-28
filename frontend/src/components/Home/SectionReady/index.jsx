import { Link } from "react-router-dom";

export function SectionReady() {
    return (
        <section class="bg-gradient-to-r from-blue-600 to-purple-600 w-full h-70 flex flex-col items-center justify-center text-white space-y-4 p-4">
            <p class="text-xl font-semibold">Pronto para começar sua jornada literária?</p>
            <p>Junte-se a milhares de leitores que já descobriram a conveniência da nossa biblioteca digital.</p>
            <div>
                <Link to="/sign-up">
                    <button class="bg-white text-blue-600 font-bold px-4 py-2 w-full rounded hover:cursor-pointer hover:p-4 duration-150 ease-out mt-2">Criar conta gratuita</button>
                </Link>
                <button class="bg-white text-black font-semibold px-4 py-2 w-full rounded hover:cursor-pointer hover:p-4 duration-150 ease-out mt-2">Ver livros disponíveis</button>
            </div>
        </section>
    )
}