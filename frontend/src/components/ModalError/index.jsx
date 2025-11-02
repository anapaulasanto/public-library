import React from "react";

export const ModalError = ({ title, subtitle, modalId }) => {
    return (
        <div>
            {document.getElementById(modalId).showModal()}
            <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex flex-col items-center justify-center">
                    <IoIosAlert size={45} color="#e70000ff" />
                    <h3 className="font-semibold text-xl pt-3">T{title}</h3>
                    <p className="py-2 text-gray-500">{subtitle}</p>
                    <div className="modal-action flex justify-center">
                        <form method="dialog" className="flex gap-2">
                            <button
                                type="button"
                                className="btn rounded-lg"
                                onClick={() => document.getElementById(modalId).close()}
                            >
                                Ok
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
};
