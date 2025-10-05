import { FaBook, FaRegStar } from "react-icons/fa";
import { IoPricetagOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";

export const itemsCard = [
    {
        title: "Total de usuários",
        icon: <LuUsers color="#2433ffff" />,
        quantidade: "500+",
        color: "#2433ff"
    }, {
        title: "Total de livros",
        icon: <FaBook color="#00662eff" />,
        quantidade: "10.000+",
        color: "#00662eff"
    }, {
        title: "Categorias",
        icon: <IoPricetagOutline color="#6105b6ff" />,
        quantidade: "100+",
        color: "#6105b6ff"
    }, {
        title: "Avaliações",
        icon: <FaRegStar color="#ee7f00ff" />,
        quantidade: "500+",
        color: "#ee7f00ff"
    }
]