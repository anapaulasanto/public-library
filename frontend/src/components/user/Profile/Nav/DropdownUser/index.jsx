import React, { useContext } from "react";
import { CiSettings } from 'react-icons/ci'
import { FaRegUser } from 'react-icons/fa'
import { IoExitOutline } from 'react-icons/io5'
import profileIcon from '../../../../../assets/icons/profile-icon.png'
import { Link } from "react-router-dom"
import { useLogout } from "../../../../../hooks/auth";
import { AuthContext } from "../../../../../context/AuthContext";
import { IconLetter } from "../../../../iconLetter"

export const DropdownUser = () => {
    const { handleLogout, isLoading } = useLogout();
    const { user } = useContext(AuthContext);
    
    const logoutClick = async () => {
        try {
            await handleLogout();

        } catch (error) {
            console.log("Falha ao deslogar usuario", error);
        }
    }

    if (!user) {
        return null;
    }

    return (
        <div className='flex items-center gap-10'>
            <p className='font-semibold'>Olá, leitor</p>
            <div className="dropdown dropdown-end ">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <IconLetter />
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-56 py-2 text-sm shadow-sm text-gray-700 mt-4">
                    <li className='ml-1 rounded-lg hover:bg-blue-300 hover:text-white '>
                        <Link to="/user/profile">
                            <FaRegUser size={14} />
                            <p>Meu perfil</p>
                        </Link>
                    </li>
                    <li className='mb-3 rounded-lg hover:bg-blue-300 hover:text-white'>
                        <Link to="/user/profile/account">
                            <CiSettings size={19} />
                            <p>Conta</p>
                        </Link>
                    </li>
                    <li className='rounded-lg hover:bg-blue-300 hover:text-white'>
                        <button
                            className='border-t border-gray-200 w-full pt-2 rounded-none'
                            onClick={logoutClick}
                            disabled={isLoading}
                        >
                            <IoExitOutline size={19} />
                            <p>{isLoading ? "Saindo.." : "Sair"}</p>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
};
