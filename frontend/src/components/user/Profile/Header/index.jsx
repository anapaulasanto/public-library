import { ContentTitle } from "../../../admin/AdminDashboard/ContentTitle";
import profileIcon from '../../../../assets/icons/profile-icon.png'
import { CardHeader } from "../CardHeader";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom"

export function Header() {
    return (
        <section className="flex flex-col items-center gap-20 py-12 bg-gradient border border-gray-200 text-white w-full lg:flex-row justify-around">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col lg:flex-row">
                    <Link
                        className="flex items-center gap-3 w-full"
                        to="/user/account"
                    >
                        <div className="w-16 rounded-full border-2 border-white">
                            <img
                                src={profileIcon}
                                alt="Icone de perfil do usuário"
                                className='w-16'
                            />
                        </div>
                        <ContentTitle
                            h1="Ana Paula"
                            p="ana.paula@gmail.com"
                        />
                    </Link>
                </div>
                <CardHeader />
            </div>
            <button className="bg-slate-100/90 text-blue-800 font-semibold shadow rounded-xl px-1 w-40 h-10 flex items-center justify-center  gap-2 text-sm hover:cursor-pointer hover:bg-gray-50/80">
                <CiSearch size={18} />
                Explorar catálogo
            </button>
        </section>
    )
}