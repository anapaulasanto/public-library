import { MenuPages } from "../AdminDashboard/MenuPages"
import { useState } from "react";
import { SectionTableBooks } from "./SectionTableBooks";
import { useContext } from "react";
import { AppContext } from "../../context";

export function AdminDashboard() {
    const {activeTab} = useContext(AppContext);
    
    return (
        <>
            <MenuPages />
            {activeTab === 'livros' && <SectionTableBooks />}
        </>
    )
}