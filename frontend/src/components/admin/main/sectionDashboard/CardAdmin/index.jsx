import { itemsCard } from "../../../../../data/cardDashboard"

export const Card = () => {
    return (
        <div className="flex gap-4 max-md:hidden">
            {itemsCard.map((item, index) => (
                <div key={index} className="bg-white w-56 p-4 px-6 mt-10 border-l-4 rounded-xl space-y-3 shadow-sm" style={{ borderColor: item.color }}>
                    <div className="flex gap-6 items-center w-full">
                        <p className="font-semibold">{item.title}</p>
                        {item.icon}
                    </div>
                    <p className="font-bold text-3xl pb-2" style={{ color: item.color }}>{item.quantidade}</p>
                </div>
            ))}

        </div>
    )
}