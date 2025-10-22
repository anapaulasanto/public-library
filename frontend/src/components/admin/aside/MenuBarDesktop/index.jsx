import { ItemsMenuBar } from "../ItemsMenuBarDesktop";

export const Menu = () => {
    return (
        <aside className="hidden lg:block">
            <ul className="menu bg-slate-50 h-full w-70">
                <div className="p-3 flex items-center gap-2 pl-5 border-b border-gray-200 mb-5">
                    <p className="bg-blue-300 w-7 h-7 text-center text-lg rounded-full font-bold text-white">A</p>
                    <div className="flex flex-col">
                        <p className="font-semibold text-base">Amanda Alves</p>
                        <p className="text-xs">Administrador</p>
                    </div>
                </div>
                <ItemsMenuBar />
            </ul>
        </aside>
    )
}