import { THead } from "./tableHead/index.jsx";
import { TBody } from "./tableBody/index.jsx";

export const TableBooks = ({ books }) => {
    return (
        <div className="overflow-auto h-[400px] mt-10 border border-neutral-200 bg-white/70 rounded-xl">
            <table className="table">
                <THead />
                <TBody books={books} />
            </table>
        </div>
    )
}