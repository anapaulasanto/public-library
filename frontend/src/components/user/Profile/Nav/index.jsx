import favicon from '../../../../assets/favicon.png'
import { Link } from "react-router-dom"
import { DropdownUser } from './DropdownUser'
export const Nav = () => {
    return (
        <div className="navbar bg-base-50 shadow-sm flex justify-between px-10">
            <Link to='/'>
                <div className="flex items-center gap-2">
                    <img src={favicon} alt="Favicon da biblioteca" className="w-[35px]" />
                    <div className="flex flex-col leading-tight">
                        <p className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-bold">BiblioTech</p>
                        <p className="text-sm font-light">Biblioteca digital</p>
                    </div>
                </div>
            </Link>
            <DropdownUser />
        </div>
    )
}