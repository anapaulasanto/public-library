import { books } from "../../../data/cardBook"
import { CiUser } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";

export function CardsBook() {
    return (
        <div class="w-full mt-5 flex flex-col items-center justify-center gap-6 lg:flex-row">
            {books.map((book, index) => (
                <div key={index} className="card bg-base-100 w-70 shadow-sm h-[560px]">
                    <figure class="h-full">
                        <img
                            src={book.img}
                            alt="Livro Entendendo Algoritmos"
                            class="w-full object-cover object-center rounded-t-xl"
                        />
                    </figure>
                    <div className="card-body flex flex-col justify-center text-start items-start max-h-40">
                        <h2 className="card-title">{book.title}</h2>
                        <p className="flex items-center gap-1 text-sm text-zinc-600">
                            <CiUser />
                            {book.author}
                        </p>
                        <p className="flex items-center gap-1 text-sm text-zinc-600">
                            <CiCalendar />
                            {book.year}
                        </p>
                        <p class="border border-gray-300 px-1.5 rounded-xl">{book.category}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}