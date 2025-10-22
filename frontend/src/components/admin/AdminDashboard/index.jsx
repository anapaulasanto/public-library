import { MenuPages } from "../main/MenuPages"
import { useContext } from "react";
import { BookContext } from "../../../context/BookContext";
import { SectionTableBooks } from "../main/sectionAdmin/SectionTableBooks";
import { SectionTableUsers } from "../main/sectionAdmin/SectionTableUsers";
import { SectionTableCategory } from "../main/sectionAdmin/SectionTableCategory";
import { LuBookA } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { IoPricetagsOutline } from "react-icons/io5";

export const AdminDashboard = () => {
    const {activeTab} = useContext(BookContext);

    const pages = [
        {
            id: "livros",
            page: "Livros",
            icon: <LuBookA />
        }, {
            id: "usuarios",
            page: "Usuários",
            icon: <LuUsers />
        }, {
            id: "categorias",
            page: "Categorias",
            icon: <IoPricetagsOutline />
        }
    ]
    
    return (
        <>
            <MenuPages page={pages} activeTab={activeTab}/>
            {activeTab === 'livros' && <SectionTableBooks />}
            {activeTab === 'usuarios' && <SectionTableUsers />}
            {activeTab === 'categorias' && <SectionTableCategory />}
        </>
    )
}