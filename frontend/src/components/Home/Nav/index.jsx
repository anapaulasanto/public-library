import favicon from '../../../assets/favicon.png'
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom'
import { CiSettings } from 'react-icons/ci'
import { FaRegUser } from 'react-icons/fa'

export const NavHome = () => {
    return (
        <nav className="w-full h-18 flex items-center justify-between px-8 shadow-md">
            <Link to="/" className="flex items-center gap-2">
                <img src={favicon} alt="Favicon da biblioteca" className="w-[35px]" />
                <div className="flex flex-col leading-tight">
                    <p className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-bold">BiblioTech</p>
                    <p className="text-sm font-light">Biblioteca digital</p>
                </div>
            </Link>
            <button className="flex items-center bg-sky-700 gap-2 rounded-xl text-white font-semibold hover:bg-sky-600 cursor-pointer">
                <div className="dropdown dropdown-end ">
                    <div tabIndex={0} role="button" className="p-2 py-1.5 flex items-center gap-2">
                        <CiUser />
                        Entrar
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-48 py-2 text-sm shadow-sm text-gray-700 mt-5">
                        <li className='ml-1 rounded-lg hover:bg-blue-300 hover:text-white'>
                            <Link to="/auth/user/login">
                                <FaRegUser size={14} />
                                <p>Usuário</p>
                            </Link>
                        </li>
                        <li className='mb-3 rounded-lg hover:bg-blue-300 hover:text-white'>
                            <Link to="/auth/admin/login">
                                <CiSettings size={19} />
                                <p>Admin</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </button>
        </nav>
    )
}