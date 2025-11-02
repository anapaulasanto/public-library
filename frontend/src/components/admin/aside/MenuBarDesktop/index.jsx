import { useContext } from "react";
import { ItemsMenuBar } from "../ItemsMenuBarDesktop";
import { AuthContext } from "../../../../context/AuthContext"
import { IconLetter } from "../../../iconLetter";

export const Menu = () => {
    const { user } = useContext(AuthContext);

    return (
        <aside className="hidden lg:block">
            <ul className="menu bg-slate-50 h-full w-70">
                <div className="p-3 flex items-center gap-2 pl-5 border-b border-gray-200 mb-5">
                    <IconLetter />
                    <div className="flex flex-col">
                        <p className="font-semibold text-base">{user.name}</p>
                        <p className="text-xs">Administrador</p>
                    </div>
                </div>
                <ItemsMenuBar />
            </ul>
        </aside>
    )
}