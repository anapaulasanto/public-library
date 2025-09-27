export function CardWelcome() {
    return (
        <div class="absolute max-w-[80%] text-center space-y-8 lg:flex-col">
            <h1 class="text-white text-4xl font-semibold">Bem-vindo à <span class="text-blue-400 font-bold">BiblioTech</span></h1>
            <p class="text-gray-400 text-lg">Descubra um mundo de conhecimento ao seu alcance. <br /> Acesse milhares de livros, conecte-se com outros leitores e transforme sua experiência de leitura.</p>
            <div class="flex flex-col gap-5 font-semibold lg:flex-row items-center">
                <button class="text-white bg-blue-400 w-2/3 h-[3rem] rounded-md hover:bg-blue-500 cursor-pointer">Começe agora</button>
                <button class="text-blue-500 bg-white w-2/3 h-[3rem] rounded-md hover:bg-gray-200 cursor-pointer">Explorar catálogo</button>
            </div>
        </div>
    )
}