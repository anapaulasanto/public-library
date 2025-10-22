import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

export const ModalPassword = () => {
    return (
        <div>
            <button className="flex items-center justify-center gap-3 bg-neutral-50 font-semibold w-40 h-10 rounded-xl border border-neutral-200 hover:bg-neutral-400 hover:cursor-pointer" onClick={() => document.getElementById('modal_id_1').showModal()}
            >
                <IoMdNotificationsOutline size={20} />
                Trocar a senha
            </button>
            <dialog id="modal_id_1" className="modal modal-bottom  sm:modal-middle">
                <div className="modal-box flex flex-col items-center ">
                    <h3 className="font-semibold text-xl">Trocar a senha</h3>
                    <div className="modal-action">
                        <form method="dialog" className="flex flex-col gap-4">
                            <div className="flex flex-col mx-auto">
                                <fieldset className="fieldset text-sm ">
                                    <legend className="fieldset-legend ">Nova senha</legend>
                                    <input type="password" className="input" placeholder="*********" />
                                </fieldset>
                                <fieldset className="fieldset text-sm">
                                    <legend className="fieldset-legend">Confirme a senha</legend>
                                    <input type="password" className="input" placeholder="*********" />
                                </fieldset>
                            </div>
                            <div>
                                <button
                                    className="btn bg-blue-400 text-white w-40"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        // acao();
                                    }}
                                >
                                    Salvar
                                </button>
                                <button className="btn bg-red-500 text-white">Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}
