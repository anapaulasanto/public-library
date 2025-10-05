import { HiOutlineUsers } from "react-icons/hi2";
import { LuBookA } from "react-icons/lu";
import { IoPricetagOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";

export const MenuItems = [
    {
        id: "livros",
        menu: "Livros",
        icon: <LuBookA />,
    }, {
        id:"usuarios",
        menu: "Usuários",
        icon: <HiOutlineUsers />,
    }, {
        id:"categorias",
        menu: "Categorias",
        icon: <IoPricetagOutline />,
    }, {
        id:"catalogo",
        menu: "Catálogo",
        icon: <RxDashboard />
    }
]