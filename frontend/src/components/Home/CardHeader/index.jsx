import { Link } from "react-router-dom";

export const CardHeader = () => {
    return (
        <div className="absolute max-w-[80%] text-center space-y-8 animate-slide-up lg:flex-col ">
            <h1 className="text-black text-5xl font-bold">Bem-vindo à <span className="font-bold text-gradient">BiblioTech</span></h1>
            <p className="text-gray-700 text-lg">Descubra um mundo de conhecimento ao seu alcance. <br /> Acesse milhares de livros, conecte-se com outros leitores e transforme sua experiência de leitura.</p>
            <div className="flex flex-col font-semibold lg:flex-row items-center">
                <Link
                    className="w-full"
                    to="/auth/user/sign-up"
                >
                    <button className="text-white bg-gradient-to-r from-sky-900 to-emerald-700 w-3/4 h-[4rem] rounded-md hover:text-black cursor-pointer">Começar agora</button>
                </Link>
                <Link to="/catalog/books" className="w-full">
                <button className="text-blue-500 bg-white w-3/4 h-[4rem] rounded-md hover:bg-gray-200 cursor-pointer">Explorar Catálogo</button>
                </Link>
            </div>
        </div>
    )
}