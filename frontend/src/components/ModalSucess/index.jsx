import React from "react";
import { LuCircleCheckBig } from "react-icons/lu";

export const ModalSucess = ({ modalId, h1, p }) => {
    return (
        <div>
            <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex flex-col items-center justify-center">
                    <LuCircleCheckBig size={40}color="#449200ff" />
                    <h3 className="font-semibold text-2xl pt-3">{h1}</h3>
                    <p className="text-gray-500 pt-2">{p}</p>
                    <div className="modal-action flex justify-center">
                        <form method="dialog" className="flex gap-2">
                            <button
                                type="button"
                                className="btn rounded-lg bg-green-300 text-white"
                                onClick={() => document.getElementById(modalId).close()}
                            >
                                Continuar
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
};
