import { CiSettings } from 'react-icons/ci'
import profileIcon from '../../../../assets/icons/profile-icon.png'
import { FaRegUser } from 'react-icons/fa'
import { IoExitOutline } from 'react-icons/io5'

export function MenuProfile() {
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn border-none shadow-none bg-transparent hover:shadow-none">
                <img src={profileIcon}
                    alt="Icone de perfil do usuário"
                    className='w-10 hover:w-11'
                />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-56 py-4 text-base shadow-sm text-gray-700 mt-2">
                <li className='ml-1 rounded-lg hover:bg-blue-300 hover:text-white'>
                    <a>
                        <FaRegUser size={14} />
                        <p className='font-semibold '>Meu perfil</p>
                    </a>
                </li>
                <li className='mb-3 rounded-lg hover:bg-blue-300 hover:text-white'>
                    <a>
                        <CiSettings size={19} />
                        <p className='font-semibold'>Painel Admin</p>
                    </a>
                </li>
                <li className='rounded-lg hover:bg-blue-300 hover:text-white'>
                    <a className='border-t border-gray-200 w-full pt-3 rounded-none'>
                        <IoExitOutline size={19} />
                        <p className='font-semibold'>Sair</p>
                    </a>
                </li>
            </ul>
        </div>
    )

}