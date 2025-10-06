import { MenuPages } from "../main/MenuPages"
import { useContext } from "react";
import { AppContext } from "../../../context";
import { SectionTableBooks } from "../main/sectionAdmin/SectionTableBooks";
import { SectionTableUsers } from "../main/sectionAdmin/SectionTableUsers";
import { SectionTableCategory } from "../main/sectionAdmin/SectionTableCategory";

export function AdminDashboard() {
    const {activeTab} = useContext(AppContext);
    
    return (
        <>
            <MenuPages />
            {activeTab === 'livros' && <SectionTableBooks />}
            {activeTab === 'usuarios' && <SectionTableUsers />}
            {activeTab === 'categorias' && <SectionTableCategory />}
        </>
    )
}