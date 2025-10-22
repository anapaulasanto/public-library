import { LuBadgeAlert } from "react-icons/lu";

export const Modal = ({ tittleBtn, h1, p, modalId, txtBtn1, txtBtn2, props }) => {
    return (
        <div>
            < button className={`btn btn rounded-xl px-8 ${props}`} onClick={() => document.getElementById(modalId).showModal()}>{tittleBtn}</button >
            <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex flex-col items-center">
                    <LuBadgeAlert size={40} color="#24afffff"/>
                    <h1 className="text-2xl font-bold">{h1}</h1>
                    <p className="py-1 w-2/3 text-center text-gray-600 text-sm">{p}</p>
                    <div className="modal-action">
                        <form method="dialog" className="flex gap-2">
                            <button className="btn bg-blue-400 text-white rounded-3xl px-8">{txtBtn1}</button>
                            <button className="btn bg-red-400 text-white rounded-3xl px-8">{txtBtn2}</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}