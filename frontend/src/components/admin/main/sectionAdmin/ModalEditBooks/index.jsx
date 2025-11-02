import { useEffect } from "react";
import { FaPencilAlt } from "react-icons/fa";

export const ModalEditBooks = ({ modalId, h1, p, acao, defaultValue1, defaultValue2, defaultValue3, defaultValue4 }) => {
    useEffect(() => {
          if(defaultValue1 && defaultValue2) {

          }
        
          
        }, []);
        
    return (
        <div>
            <button className="btn border-none bg-transparent hover:bg-blue-200 hover:cursor-pointer" onClick={() => document.getElementById(modalId).showModal()}><FaPencilAlt /></button>
            <dialog id={modalId} className="modal modal-bottom sm:modal-middle ">
                <div className="modal-box flex flex-col items-center max-w-fit">
                    <div className="flex flex-col self-start">
                        <h3 className="font-semibold text-lg">{h1}</h3>
                        <p className="text-gray-500">{p}</p>
                    </div>
                    
                    <div className="modal-action ">
                        <form method="dialog" className="flex flex-col justify-start ">
                            <div className="flex gap-3">
                                <fieldset className="fieldset text-sm w-70 ">
                                    <legend className="fieldset-legend ">Título</legend>
                                    <input type="text" className="input rounded-lg border border-gray-200 outline-blue-400" defaultValue={defaultValue1} />
                                </fieldset>
                                <fieldset className="fieldset text-sm w-70">
                                    <legend className="fieldset-legend">Autor</legend>
                                    <input type="text" className="input rounded-lg border border-gray-200 outline-blue-400" defaultValue={defaultValue2} />
                                </fieldset>
                            </div>

                            <div className="flex gap-3">
                                <fieldset className="fieldset text-sm w-70">
                                    <legend className="fieldset-legend">Categoria</legend>
                                    <input type="text" className="input rounded-lg border border-gray-200 outline-blue-400 "defaultValue={defaultValue3} />
                                </fieldset>
                                <fieldset className="fieldset text-sm w-70">
                                    <legend className="fieldset-legend">Ano de publicação</legend>
                                    <input type="text" className="input rounded-lg border border-gray-200 outline-blue-400 " defaultValue={defaultValue4} />
                                </fieldset>
                            </div>
                            <div className="flex self-end gap-4 pt-4">
                                <button className="btn rounded-xl bg-white">Cancelar</button>
                                <button
                                    className="btn bg-sky-700 px-10 text-white rounded-xl"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        acao();
                                    }}
                                >
                                    Salvar alterações
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}