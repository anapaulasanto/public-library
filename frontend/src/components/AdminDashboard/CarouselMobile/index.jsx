import { itemsCard } from "../../../data/cardDashboard"

export function Carousel() {
    return (
        <div className="carousel rounded-box max-w-md space-x-7 p-4 flex mx-auto md:hidden">
            <div className="carousel-item space-x-5">
                {itemsCard.map((item, index) => (
                    <div key={index} className="bg-white w-80 h-40 p-4 px-6 mt-10 border-l-4 rounded-xl space-y-14 shadow-sm" style={{ borderColor: item.color }}>
                        <div className="flex gap-20 items-center w-full">
                            <p className="font-semibold text-xl">{item.title}</p>
                            {item.icon}
                        </div>
                        <p className="font-bold text-3xl" style={{ color: item.color }}>{item.quantidade}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}