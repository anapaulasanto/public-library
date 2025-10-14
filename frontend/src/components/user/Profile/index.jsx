import { useContext } from "react";
import { MenuPages } from "../../admin/main/MenuPages";
import { LuBookA, LuHeart, LuStar } from "react-icons/lu";
import { BookContext } from "../../../context/bookContext";
import { SectionTableRental } from "./Main/SectionTableRental";

export function DashboardUser() {
    // const { activeTabBooks } = useContext(BookContext)

    // const pages = [
    //     {
    //         id: "alugueis",
    //         page: "Aluguéis",
    //         icon: <LuBookA />
    //     }, {
    //         id: "avaliações",
    //         page: "Avaliações",
    //         icon: <LuStar />
    //     }, {
    //         id: "favoritos",
    //         page: "Favoritos",
    //         icon: <LuHeart />
    //     }
    // ]

    return (
        <div className="w-full">
            {/* <MenuPages page={pages} activeTab={activeTabBooks} /> */}
            <SectionTableRental />
        </div>
    )
}