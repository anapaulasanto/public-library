import { card } from "../../../data/cardHome"

export function CardsCategories() {
    return (
        <div className="grid grid-cols-1 gap-3 w-full max-w-4xl mb-10 sm:grid sm:grid-cols-2">
            {card.map((item) => (
                <div key={item.id} class="flex flex-col items-center justify-center p-8 bg-gray-50 w-[90%] mx-auto rounded-xl border border-gray-300 hover:shadow-lg transition-shadow hover:cursor-pointer">
                    <img src={item.icon} alt="Icone de livro" className="w-[40px]" />
                    <h1 className="text-xl font-semibold mb-2">{item.title}</h1>
                    <p className="text-gray-700">{item.description}</p>
                </div>
            ))}
        </div>
    )
}