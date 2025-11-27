import { FaBook, FaRegStar } from "react-icons/fa";
import { IoPricetagOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { useAllUsers } from "../../../../../hooks/user";
import { useDataCount } from "../../../../../hooks/utils";
import { useBooksAdmin } from "../../../../../hooks/book";
import { useCategoryCatalog } from "../../../../../hooks/category";
import { useReviews } from "../../../../../hooks/review";
import { InfoCard } from "./infoCard";

export const Card = () => {
    const { data: users } = useAllUsers();
    const { data: books } = useBooksAdmin();
    const { data: categories } = useCategoryCatalog();
    const { data: reviews } = useReviews();

    const usersCount = useDataCount(users);
    const booksCount = useDataCount(books);
    const categoriesCount = useDataCount(categories);
    const reviewsCount = useDataCount(reviews);

    return (
        <div className="flex gap-4 max-md:hidden">
            <InfoCard
                title="Total de usuários"
                count={usersCount}
                icon={<LuUsers color="#2433ff" />}
                borderColor="border-blue-600"
                textColor="text-blue-600"
            />
            <InfoCard
                title="Total de livros"
                count={booksCount}
                icon={<FaBook color="#00662e" />}
                borderColor="border-green-700"
                textColor="text-green-700"
            />
            <InfoCard
                title="Categorias"
                count={categoriesCount}
                icon={<IoPricetagOutline color="#6105b6" />}
                borderColor="border-purple-700"
                textColor="text-purple-700"
            />
            <InfoCard
                title="Avaliações"
                count={reviewsCount}
                icon={<FaRegStar color="#ee7f00" />}
                borderColor="border-orange-700"
                textColor="text-orange-700"
            />
        </div>
    )
}