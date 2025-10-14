import { ContentTitle } from "../../../admin/AdminDashboard/ContentTitle";
import { IoMdNotificationsOutline } from "react-icons/io";

export function SectionNotifications() {
    return (
        <section className="my-10">
            <ContentTitle
                h1="Notificações"
                p="Configure suas preferências de notificação"
            />
            <div className="flex justify-between border-b border-gray-300 py-5 my-7">
                <div className="flex flex-col">
                    <h3 className="font-bold">Email de lembrete</h3>
                    <p className="text-sm text-gray-500">Receber lembretes por email sobre devoluções</p>
                </div>
                <button className="flex items-center justify-center gap-3 bg-neutral-50 font-semibold w-30 h-10 rounded-xl border border-neutral-200 hover:bg-neutral-400 hover:cursor-pointer"
                >
                    <IoMdNotificationsOutline size={20} />
                    Ativado
                </button>
            </div>
        </section>
    )
}