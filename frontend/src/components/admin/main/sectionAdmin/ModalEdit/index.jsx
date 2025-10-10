import { FaPencilAlt } from "react-icons/fa";

export function ModalEdit({ modalId, h1, p }) {
    return (
        <div>
            <button className="btn border-none hover:bg-blue-200 hover:cursor-pointer" onClick={() => document.getElementById(modalId).showModal()}><FaPencilAlt /></button>
            <dialog id={modalId} className="modal modal-bottom  sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-semibold text-xl">{h1}</h3>
                    <p className="py-1 text-gray-500">{p}</p>
                    <div className="modal-action">
                        <form method="dialog" className="flex flex-col justify-start ">
                            <div className="flex flex-col">
                                <div className="flex gap-2 basis-1/2">
                                    <fieldset className="fieldset text-sm ">
                                        <legend className="fieldset-legend ">Título</legend>
                                        <input type="text" className="input" placeholder="My awesome page" />
                                    </fieldset>
                                    <fieldset className="fieldset text-sm">
                                        <legend className="fieldset-legend">Autor</legend>
                                        <input type="text" className="input" placeholder="My awesome page" />
                                    </fieldset>
                                </div>
                                <div className="flex basis-1/2">
                                    <fieldset className="fieldset text-sm">
                                        <legend className="fieldset-legend">Categoria</legend>
                                        <input type="text" className="input" placeholder="My awesome page" />
                                    </fieldset>
                                    <fieldset className="fieldset text-sm">
                                        <legend className="fieldset-legend">Ano de publicação</legend>
                                        <input type="text" className="input" placeholder="My awesome page" />
                                    </fieldset>
                                </div>
                            </div>
                            <div>
                                <button
                                    className="btn bg-green-500 text-white"
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