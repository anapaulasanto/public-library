import { HiOutlineUsers } from "react-icons/hi2";
import { LuBookA } from "react-icons/lu";
import { IoPricetagOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineNotificationsActive } from "react-icons/md";

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
        id:"notificacoes",
        menu: "Notificações",
        icon: <MdOutlineNotificationsActive />,
    }, {
        id:"catalogo",
        menu: "Catálogo",
        icon: <RxDashboard />
    }
]