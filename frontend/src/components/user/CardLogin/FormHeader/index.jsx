import { Link } from 'react-router-dom'
import favicon from '../../../../assets/favicon.png'

export const FormHeader = ({ subtitle, classname }) => {
    return (
        <header className="flex flex-col items-center pt-3">
            <Link to="/">
                <div className="flex items-center mb-4 gap-2">
                    <img src={favicon} alt="Favicon da biblioteca" className="w-[35px]" />
                    <div className="flex flex-col leading-tight">
                        <p className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-bold">BiblioTech</p>
                        <p className="text-sm font-light ">Biblioteca digital</p>
                    </div>
                </div>
            </Link>
            <p className={`text-gray-500 text-sm text-center ${classname}`}>{subtitle}</p>
        </header>
    )
}