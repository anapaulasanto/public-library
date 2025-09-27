import bookIcon from '../../../assets/book-icon.png'
import searchIcon from '../../../assets/search-icon.png'
import reviewIcon from '../../../assets/review-icon.png'
import phoneIcon from '../../../assets/phone-icon.png'

export function CarouselHome() {
    return (
        <>
            <div className="carousel w-full rounded-lg mb-30 mt-10">
                <div id="slide1" className="carousel-item relative w-full">
                    <div class="flex flex-col items-center justify-center p-8 bg-white w-[90%] mx-auto rounded-xl shadow-xl sm:w-[60%]">
                        <img src={bookIcon} alt="Icone de livro" className="w-[40px]" />
                        <h1 className="text-xl font-semibold mb-2">Vasto acervo digital</h1>
                        <p className="text-gray-700">Milhares de livros disponíveis para leitura online</p>
                    </div>
                    <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 transform justify-between lg:left-4 right-4">
                        <a href="#slide4" className="btn btn-circle ">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div class="flex flex-col items-center justify-center p-3 bg-white w-[90%] mx-auto rounded-xl shadow-xl">
                        <img src={searchIcon} alt="Icone de livro" className="w-[40px]" />
                        <h1 className="text-xl font-semibold mb-2">Busca Inteligente</h1>
                        <p className="text-gray-700">Encontre livros por título, autor, categoria ou palavra-chave</p>
                    </div>
                    <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div class="flex flex-col items-center justify-center p-3 bg-white w-[90%] mx-auto rounded-xl shadow-xl">
                        <img src={reviewIcon} alt="Icone de livro" className="w-[40px]" />
                        <h1 className="text-xl font-semibold mb-2">Sistema de Avaliações</h1>
                        <p className="text-gray-700">Avalie e descubra os melhores livros da comunidade</p>
                    </div>
                    <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div class="flex flex-col items-center justify-center p-3 bg-white w-[90%] mx-auto rounded-xl shadow-xl">
                        <img src={phoneIcon} alt="Icone de livro" className="w-[40px]" />
                        <h1 className="text-xl font-semibold mb-2">Leitura Responsiva</h1>
                        <p className="text-gray-700">Interface otimizada para todos os dispositivos</p>
                    </div>
                    <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>
    )
}