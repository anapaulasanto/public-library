import favicon from '../../../../assets/favicon.png'
import { CiSettings } from 'react-icons/ci'
import { FaRegUser } from 'react-icons/fa'
import { IoExitOutline } from 'react-icons/io5'
import profileIcon from '../../../../assets/icons/profile-icon.png'
import { Link } from "react-router-dom"

export function Nav() {
    return (
        <div className="navbar bg-base-50 shadow-sm flex justify-between px-10">
            <Link to='/'>
                <div class="flex items-center gap-2">
                    <img src={favicon} alt="Favicon da biblioteca" class="w-[35px]" />
                    <div class="flex flex-col leading-tight">
                        <p class="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-bold">BiblioTech</p>
                        <p class="text-sm font-light">Biblioteca digital</p>
                    </div>
                </div>
            </Link>
            <div className='flex items-center gap-10'>
                <p className='font-semibold'>Olá, Ana!</p>
                <div className="dropdown dropdown-end ">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={profileIcon}
                                alt="Icone de perfil do usuário"
                                className='w-10 hover:w-11'
                            />
                        </div>
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-56 py-2 text-sm shadow-sm text-gray-700 mt-4">
                        <li className='ml-1 rounded-lg hover:bg-blue-300 hover:text-white '>
                            <Link to="/user/profile">
                                <FaRegUser size={14} />
                                <p>Meu perfil</p>
                            </Link>
                        </li>
                        <li className='mb-3 rounded-lg hover:bg-blue-300 hover:text-white'>
                            <Link to="/user/account">
                                <CiSettings size={19} />
                                <p>Conta</p>
                            </Link>
                        </li>
                        <li className='rounded-lg hover:bg-blue-300 hover:text-white'>
                            <a className='border-t border-gray-200 w-full pt-2 rounded-none'>
                                <IoExitOutline size={19} />
                                <p>Sair</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}