import { MenuPages } from "../main/MenuPages"
import { useContext } from "react";
import { BookContext } from "../../../context";
import { SectionTableBooks } from "../main/sectionAdmin/SectionTableBooks";
import { SectionTableUsers } from "../main/sectionAdmin/SectionTableUsers";
import { SectionTableCategory } from "../main/sectionAdmin/SectionTableCategory";

export function AdminDashboard() {
    const {activeTab} = useContext(BookContext);
    
    return (
        <>
            <MenuPages />
            {activeTab === 'livros' && <SectionTableBooks />}
            {activeTab === 'usuarios' && <SectionTableUsers />}
            {activeTab === 'categorias' && <SectionTableCategory />}
        </>
    )
}