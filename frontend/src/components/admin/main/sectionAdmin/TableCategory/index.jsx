import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { useCategoryCatalog } from "../../../../../hooks/category/index.js";
import { Loading } from "../../../../Loading/index.jsx";
import { ModalEditCategory } from "../ModalEditCategory/index.jsx";
import { ModalDeleteCategory } from "../ModalDeleteCategory/index.jsx";

export const TableCategory = () => {
    const { data: categories, isLoading, isError } = useCategoryCatalog();

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <div className="text-center mt-10 text-red-500">Erro ao carregar categorias.</div>;
    }

    return (
        <div className="overflow-auto h-[400px] rounded-box border border-neutral-200 bg-base-50 mt-10">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="text-black">
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Código</th>
                        <th>Popularidade</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {categories?.map((category) => (
                        <tr key={category.id}>
                            <td className="font-semibold">{category.categoryName}</td>
                            <td className="max-w-md">
                                {category.description || 'Sem descrição'}
                            </td>
                            <td>{category.categoryCode}</td>
                            <td>
                                <span className="badge badge-primary text-center mx-auto">{category.categoryPopularity}</span>
                            </td>
                            <td className="gap-3">
                                <ModalEditCategory
                                    key={`edit_${category.id}`}
                                    modalId={`modal_edit_category_${category.id}`}
                                    h1="Editar categoria"
                                    p="Atualize os dados da categoria"
                                    categoryName={category.categoryName}
                                    description={category.description}
                                    categoryCode={category.categoryCode}
                                    categoryPopularity={category.categoryPopularity}
                                    categoryId={category.id}
                                />
                                <ModalDeleteCategory
                                    modalId={`modal_delete_category_${category.id}`}
                                    categoryId={category.id}
                                    categoryName={category.categoryName}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}