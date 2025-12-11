import React, { useContext, useState } from "react";
import userImg from "../../../../../assets/user.jpg"
import { StarRating } from "../starRating";
import { Loading } from "../../../../Loading";
import { RiChatAiLine } from "react-icons/ri";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import { AuthContext } from "../../../../../context/AuthContext";
import { useDeleteReview, useUpdateReview } from "../../../../../hooks/review";
import { ModalSucess } from "../../../../ModalSucess";
import { ModalError } from "../../../../ModalError";

export const SectionReviews = ({ reviews, isLoading, isError }) => {
    const { user } = useContext(AuthContext);
    const [reviewToDelete, setReviewToDelete] = useState(null);
    const [reviewToEdit, setReviewToEdit] = useState(null);
    const [editRating, setEditRating] = useState(0);
    const [editComment, setEditComment] = useState("");
    
    const { handleDeleteReview } = useDeleteReview(reviewToDelete);
    const { handleUpdateReview } = useUpdateReview(reviewToEdit);
    
    const handleOpenEditModal = (review) => {
        setReviewToEdit(review.id);
        setEditRating(review.nota);
        setEditComment(review.comentario || "");
        document.getElementById(`modal_edit_review_${review.id}`).showModal();
    };
    
    const handleConfirmEdit = async () => {
        if (!editRating) {
            document.getElementById("modal_edit_review_error_rating").showModal();
            return;
        }
        
        try {
            await handleUpdateReview({
                nota: editRating,
                comentario: editComment
            });
            
            document.getElementById(`modal_edit_review_${reviewToEdit}`).close();
            setTimeout(() => {
                const modalSuccess = document.getElementById("modal_edit_review_success");
                if (modalSuccess && !modalSuccess.open) {
                    modalSuccess.showModal();
                }
            }, 150);
        } catch (error) {
            document.getElementById(`modal_edit_review_${reviewToEdit}`).close();
            setTimeout(() => {
                const modalError = document.getElementById("modal_edit_review_error");
                if (modalError && !modalError.open) {
                    modalError.showModal();
                }
            }, 150);
        }
    };
    
    const handleOpenDeleteModal = (reviewId) => {
        setReviewToDelete(reviewId);
        document.getElementById(`modal_delete_review_${reviewId}`).showModal();
    };
    
    const handleConfirmDelete = async () => {
        try {
            await handleDeleteReview();
            document.getElementById(`modal_delete_review_${reviewToDelete}`).close();
            setTimeout(() => {
                const modalSuccess = document.getElementById("modal_delete_review_success");
                if (modalSuccess && !modalSuccess.open) {
                    modalSuccess.showModal();
                }
            }, 150);
        } catch (error) {
            document.getElementById(`modal_delete_review_${reviewToDelete}`).close();
            setTimeout(() => {
                const modalError = document.getElementById("modal_delete_review_error");
                if (modalError && !modalError.open) {
                    modalError.showModal();
                }
            }, 150);
        }
    };
    
    const canDeleteReview = (review) => {
        if (!user) return false;
        // Apenas o autor da avaliação pode excluir (não admin)
        return review.userId === user.id;
    };
    
    const canEditReview = (review) => {
        if (!user) return false;
        // Apenas o autor da avaliação pode editar (não admin)
        return review.userId === user.id;
    };
    
    if (isLoading) {
        return <div className="my-40"><Loading /></div>;
    }

    if (isError) {
        return (
            <div className="flex flex-col gap-1 bg-neutral-100 mt-5 p-4 border border-neutral-200 rounded-xl w-[80%] mx-auto shadow mb-10">
                <p className="text-2xl font-semibold">Avaliações dos leitores</p>
                <p className="text-sm text-gray-600">Seja o primeiro a avaliar este livro</p>
                <div className="flex flex-col items-center text-center mt-10">
                    <RiChatAiLine size={40} color="#2184acff" />
                    <h1 className="font-bold text-xl mb-3">Nenhuma avaliação ainda</h1>
                    <p className="w-[50%] text-sm text-gray-600">Seja o primeiro a compartilhar sua opinião sobre este livro e ajude outros leitores a descobrir excelentes histórias.</p>
                </div>
            </div>
        )
    }
    return (
        <div className="w-full">
            <div className="flex flex-col gap-10 bg-neutral-100 mt-5 p-4 border border-neutral-200 rounded-xl w-[80%] mx-auto shadow mb-10">
                <p className="text-2xl font-semibold">Avaliações dos leitores</p>
                {reviews.map((review) => {
                    const isMyReview = user && review.userId === user.id;
                    return (
                        <div 
                            key={review.id} 
                            className={`flex gap-3 border-b pb-4 transition-all ${
                                isMyReview 
                                    ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-300 p-4 rounded-xl shadow-md border-l-4 border-l-blue-600' 
                                    : 'border-gray-200'
                            }`}
                        >
                            <img
                                src={userImg}
                                alt="Imagem de boneco de usuario"
                                className={`rounded-full w-10 self-start ${
                                    isMyReview 
                                        ? 'shadow-lg shadow-blue-500 ring-2 ring-blue-400' 
                                        : 'shadow-lg shadow-blue-400'
                                }`}
                            />
                        <div className="flex flex-col flex-1">
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <p className="font-semibold">{review.reviewerName}</p>
                                        {isMyReview && (
                                            <span className="badge badge-sm bg-blue-600 text-white border-none font-semibold">
                                                Você
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <StarRating
                                            props="w-18"
                                            rate={review.nota}
                                            ratingName={`rating-review-${review.id}`}
                                        />
                                        <p className="text-xs text-gray-500">{review.reviewDate}</p>
                                    </div>
                                    <p className="text-gray-600 font-semibold mt-2">{review.comentario}</p>
                                </div>
                                <div className="flex gap-2">
                                    {canEditReview(review) && (
                                        <button
                                            className="hover:bg-blue-100 p-2 rounded-lg cursor-pointer text-blue-600"
                                            onClick={() => handleOpenEditModal(review)}
                                            title="Editar avaliação"
                                        >
                                            <FaPencilAlt />
                                        </button>
                                    )}
                                    {canDeleteReview(review) && (
                                        <button
                                            className="hover:bg-red-100 p-2 rounded-lg cursor-pointer text-red-600"
                                            onClick={() => handleOpenDeleteModal(review.id)}
                                            title="Excluir avaliação"
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                        
                        {/* Modal de edição */}
                        <dialog id={`modal_edit_review_${review.id}`} className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box max-w-2xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 shadow-2xl">
                                {/* Header com ícone */}
                                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-blue-200">
                                    <div className="bg-blue-600 p-3 rounded-full shadow-lg">
                                        <FaPencilAlt size={20} color="#fff" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-2xl text-gray-800">Editar Avaliação</h3>
                                        <p className="text-sm text-gray-500">Atualize sua opinião sobre este livro</p>
                                    </div>
                                </div>
                                
                                {/* Seção de avaliação por estrelas */}
                                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-5">
                                    <label className="block mb-3">
                                        <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                            Sua Avaliação
                                        </span>
                                    </label>
                                    <div className="flex items-center gap-3">
                                        <div className="rating rating-lg gap-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <input
                                                    key={star}
                                                    type="radio"
                                                    name={`edit-rating-${review.id}`}
                                                    className="mask mask-star-2 bg-orange-400 hover:bg-orange-500 transition-all cursor-pointer"
                                                    checked={editRating === star}
                                                    onChange={() => setEditRating(star)}
                                                />
                                            ))}
                                        </div>
                                        {editRating > 0 && (
                                            <span className="text-lg font-bold text-orange-500 ml-2">
                                                {editRating}.0
                                            </span>
                                        )}
                                    </div>
                                    {editRating === 0 && (
                                        <p className="text-xs text-red-500 mt-2">* Selecione uma nota</p>
                                    )}
                                </div>
                                
                                {/* Seção de comentário */}
                                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-6">
                                    <label className="block mb-3">
                                        <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                                            Seu Comentário
                                        </span>
                                        <span className="text-xs text-gray-400 ml-2">(Opcional)</span>
                                    </label>
                                    <textarea
                                        className="textarea textarea-bordered w-full h-32 resize-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                                        placeholder="Compartilhe sua opinião sobre este livro... O que você achou da história? Recomendaria para outras pessoas?"
                                        value={editComment}
                                        onChange={(e) => setEditComment(e.target.value)}
                                    />
                                    <div className="flex justify-between items-center mt-2">
                                        <p className="text-xs text-gray-400">
                                            {editComment.length} caracteres
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Botões de ação */}
                                <div className="flex gap-3 justify-end pt-4 border-t border-blue-100">
                                    <button
                                        type="button"
                                        className="btn btn-ghost hover:bg-gray-100 rounded-lg px-6 font-semibold"
                                        onClick={() => document.getElementById(`modal_edit_review_${review.id}`).close()}
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        type="button"
                                        className="btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg px-8 font-semibold shadow-lg hover:shadow-xl transition-all"
                                        onClick={handleConfirmEdit}
                                    >
                                        💾 Salvar Alterações
                                    </button>
                                </div>
                            </div>
                        </dialog>
                        
                        {/* Modal de confirmação de exclusão */}
                        <dialog id={`modal_delete_review_${review.id}`} className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box flex flex-col items-center justify-center">
                                <FaTrashAlt size={45} color="#e70000ff" />
                                <h3 className="font-semibold text-xl pt-3">Tem certeza que deseja excluir esta avaliação?</h3>
                                <p className="py-2 text-gray-500 text-center">Esta ação é irreversível e não poderá ser desfeita.</p>
                                <div className="modal-action flex justify-center">
                                    <div className="flex gap-2">
                                        <button
                                            type="button"
                                            className="btn rounded-lg"
                                            onClick={() => document.getElementById(`modal_delete_review_${review.id}`).close()}
                                        >
                                            Cancelar
                                        </button>
                                        <button
                                            type="button"
                                            className="btn bg-sky-700 text-white rounded-lg"
                                            onClick={handleConfirmDelete}
                                        >
                                            Excluir
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </dialog>
                    </div>
                    );
                })}
            </div>
            
            {/* Modais de sucesso e erro */}
            <ModalSucess 
                modalId="modal_delete_review_success"
                h1="Avaliação excluída com sucesso!"
                p="A avaliação foi removida permanentemente."
            />
            
            <ModalError 
                modalId="modal_delete_review_error"
                h1="Erro ao excluir avaliação"
                p="Não foi possível excluir a avaliação. Tente novamente."
            />
            
            <ModalSucess 
                modalId="modal_edit_review_success"
                h1="Avaliação atualizada com sucesso!"
                p="Suas alterações foram salvas."
            />
            
            <ModalError 
                modalId="modal_edit_review_error"
                h1="Erro ao atualizar avaliação"
                p="Não foi possível atualizar a avaliação. Tente novamente."
            />
            
            <ModalError 
                modalId="modal_edit_review_error_rating"
                h1="Nota obrigatória"
                p="Por favor, selecione uma nota antes de salvar."
            />
        </div>
    )
};
