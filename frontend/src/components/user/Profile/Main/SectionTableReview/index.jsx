import { ContentTitle } from "../../../../admin/AdminDashboard/ContentTitle";
import { TableReview } from "../TableReview";

export const SectionTableReview = () => {
    return (
        <section className="p-8 mt-12 bg-neutral-50/40 mt-15 rounded-xl border border-gray-200 w-full flex flex-col justify-center">
            <div className="flex justify-between">
                <ContentTitle h1="Minhas avaliações" />
            </div>
            <TableReview />
        </section>
    )
}