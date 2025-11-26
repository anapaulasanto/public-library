import { MenuProfile } from '../MenuProfile'
import favicon from '../../../../assets/favicon.png'
import { Link } from 'react-router-dom'

export const NavAdmin = () => {
    return (
        <nav className='bg-slate-50 border border-slate-100 shadow-xs'>
            <div className='flex justify-between items-center p-5'>
                    <Link to='/'>
                        <div className="flex items-center gap-2 w-full">
                            <img src={favicon} alt="Favicon da biblioteca" className="w-[35px]" />
                            <div className="flex flex-col leading-tight">
                                <p className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-bold">BiblioTech</p>
                                <p className="text-sm font-light">Biblioteca digital</p>
                            </div>
                        </div>
                    </Link>
                <div className='flex items-center gap-3'>
                    <p className='text-sm max-sm:hidden'>Olá, Administrador</p>
                    <MenuProfile />
                </div>
            </div>
        </nav>
    )
}