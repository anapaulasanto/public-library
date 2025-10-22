import { useContext } from "react";
import { MenuPages } from "../../admin/main/MenuPages";
import { LuBookA, LuStar } from "react-icons/lu";
import { BookContext } from "../../../context/BookContext";
import { SectionTableRental } from "./Main/SectionTableRental";
import { SectionRecomended } from "./Main/SectionRecomended";
import { SectionTableReview } from "./Main/SectionTableReview";

export const DashboardUser = () => {
    const { activeTabRental } = useContext(BookContext)

    const pages = [
        {
            id: "alugueis",
            page: "Aluguéis",
            icon: <LuBookA />
        }, {
            id: "avaliacoes",
            page: "Avaliações",
            icon: <LuStar />
        }
    ]

    return (
        <div className="w-full 2xl:w-[80%]">
            <MenuPages page={pages} activeTab={activeTabRental} />
            {activeTabRental === 'alugueis' && <SectionTableRental /> }
            {activeTabRental === 'avaliacoes' && <SectionTableReview /> }
            <SectionRecomended />
        </div>
    )
}