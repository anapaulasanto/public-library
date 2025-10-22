import favicon from '../../../assets/favicon.png'
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
        <nav className="w-full h-18 flex items-center justify-between px-8 shadow-md">
            <div className="flex items-center gap-2">
                <img src={favicon} alt="Favicon da biblioteca" className="w-[35px]" />
                <div className="flex flex-col leading-tight">
                    <p className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-bold">BiblioTech</p>
                    <p className="text-sm font-light">Biblioteca digital</p>
                </div>
            </div>
            <Link to="/auth/user/login">
                <button className="flex items-center bg-sky-700 gap-2 p-3 px-4 rounded-xl text-white font-semibold hover:bg-sky-600 cursor-pointer">
                    <CiUser />
                    Entrar
                </button>
            </Link>
        </nav>
    )
}