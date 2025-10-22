import { MenuProfile } from '../MenuProfile'

export const Nav = () => {
    return (
        <nav className='bg-slate-50 border border-slate-100 shadow-xs'>
            <div className='flex justify-between items-center p-5'>
                <div className='flex items-center'>
                    <h1 className='font-bold w-full'>Painel administrativo</h1>
                </div>
                <div className='flex items-center gap-3'>
                    <p className='text-sm max-sm:hidden'>Olá, Administrador</p>
                    <MenuProfile />
                </div>
            </div>
        </nav>
    )
}