import React from "react";
import { ModalSure } from "../../Profile/ModalSure";
import { ContentTitle } from "../../../admin/AdminDashboard/ContentTitle";
import { useUserDelete } from "../../../../hooks/user";


export const SectionAccDelete = () => {
    const modalIdSure = "sure_modal_settings"
    const { handleDeleteUser } = useUserDelete()

    function sureDelete() {
        const modal = document.getElementById(modalIdSure);
        modal.showModal()
    }

    return (
        <div className="bg-base-200 border-base-300 rounded-box w-full 2xl:w-[80%] mx-auto border p-8 mt-5">
            <ContentTitle
                h1="Excluir conta"
                p="Encerre sua conta conosco"
            />
            <button
                className="bg-red-500 p-1 px-2 rounded-xl text-white mt-6"
                onClick={sureDelete}
            >
                Excluir conta
            </button>
            <ModalSure
                modalId={modalIdSure}
                h1="Tem certeza que deseja excluir sua conta?"
                p="Essa ação não pode ser desfeita."
                txtBtn1="Cancelar"
                txtBtn2="Excluir"
            />
        </div>
    );
};
