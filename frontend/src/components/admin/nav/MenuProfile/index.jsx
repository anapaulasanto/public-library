import { CiSettings } from 'react-icons/ci'
import profileIcon from '../../../../assets/icons/profile-icon.png'
import { FaRegUser } from 'react-icons/fa'
import { IoExitOutline } from 'react-icons/io5'
import { useLogout } from '../../../../hooks/auth'
import { useContext } from 'react'
import { AuthContext } from '../../../../context/AuthContext'
import { Link } from 'react-router-dom'

export const MenuProfile = () => {
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
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn border-none shadow-none bg-transparent hover:shadow-none">
                <img src={profileIcon}
                    alt="Icone de perfil do usuário"
                    className='w-10 hover:w-11 transition-all duration-200 '
                />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-56 py-2 text-sm shadow-sm text-gray-700 mt-6">
                <li className='ml-1 rounded-lg hover:bg-blue-300 hover:text-white '>
                    <Link to="/admin/dashboard">
                        <FaRegUser size={14} />
                        <p className=' '>Meu perfil</p>
                    </Link>
                </li>
                <li className='mb-3 rounded-lg hover:bg-blue-300 hover:text-white'>
                    <Link to="/admin/dashboard"> 
                        <CiSettings size={19} />
                        <p className=''>Painel Admin</p>
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
    )

}