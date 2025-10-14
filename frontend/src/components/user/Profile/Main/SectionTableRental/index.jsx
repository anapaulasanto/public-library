import { CiSearch } from "react-icons/ci";
import { ContentTitle } from "../../../../admin/AdminDashboard/ContentTitle";
import { TableRental } from "../TableRental";

export function SectionTableRental() {
    return (
        <section className="p-8 mt-12 bg-neutral-50/40 mt-15 rounded-xl border border-gray-200 w-full flex flex-col justify-center">
            <div className="flex justify-between">
                <ContentTitle h1="Meus livros alugados" p="Gerencie seus livros alugados" />
                
            </div>
            <TableRental />
        </section>
    )
}