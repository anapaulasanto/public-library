import { FaRegCalendar } from "react-icons/fa";

export const TableReview = () => {
    return(
        <div className="flex flex-col gap-3 border border-gray-300 bg-neutral-200/50 p-5 rounded-xl mt-10">
            <h1 className="font-semibold text-xl">Pollyana</h1>
            <div className="flex items-center gap-10">
                <div className="rating w-24">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                </div>
                <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <FaRegCalendar />
                    <p>19 de outubro de 2025</p>
                </div>
            </div>
            <p className="text-sm">Livro maravilhoso, prende do começo ao fim!</p>
        </div>
    )
}