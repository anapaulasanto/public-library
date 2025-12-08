import { useForm } from "react-hook-form";
import { FaPlus, FaBook, FaUser, FaHashtag, FaLayerGroup, FaCopy, FaCalendar, FaAlignLeft, FaImage } from "react-icons/fa";

export const ModalAddBook = ({ modalId, h1, p, onAddBook }) => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        onAddBook(data); // Chama a função do componente pai
        reset(); // Limpa o formulário
        document.getElementById(modalId).close(); // Fecha o modal
    };

    return (
        <div>
            <button className="btn bg-blue-400 text-white rounded-xl hover:bg-blue-500" onClick={() => document.getElementById(modalId).showModal()}>
                <FaPlus /> Adicionar Livro
            </button>
            <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex flex-col items-center max-w-4xl">
                    <div className="flex flex-col self-start w-full">
                        <h3 className="font-semibold text-lg">{h1}</h3>
                        <p className="text-gray-500">{p}</p>
                    </div>

                    <div className="modal-action w-full">
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-start w-full gap-10">

                            {/* Seção Capa do Livro */}
                            <div className="flex flex-col gap-2 pt-4">
                                <h4 className="font-semibold flex items-center gap-2"><FaImage /> Capa do Livro</h4>
                                <div className="flex gap-6 items-start">
                                    {/* <div className="flex flex-col items-center justify-center w-40 h-52 border rounded-lg bg-gray-50 text-gray-400">
                                        <FaBook size={40} />
                                        <span>Sem capa</span>
                                    </div> */}
                                    <fieldset className="fieldset text-sm flex-grow">
                                        <legend className="fieldset-legend">URL da Imagem de Capa</legend>
                                        <input type="text" {...register("img")} className="input rounded-lg border border-gray-200 outline-blue-400 w-full" placeholder="https://exemplo.com/capa-do-livro.jpg" />
                                        <p className="text-xs text-gray-400 mt-1">Cole a URL de uma imagem de capa do livro. Formatos suportados: JPG, PNG, WebP.</p>
                                    </fieldset>
                                </div>
                            </div>

                            {/* Seção Informações Básicas */}
                            <div className="flex flex-col gap-2">
                                <h4 className="font-semibold">Informações Básicas</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <fieldset className="fieldset text-sm">
                                        <legend className="fieldset-legend flex items-center gap-1"><FaBook /> Título</legend>
                                        <input type="text" {...register("title")} className="input rounded-lg border border-gray-200 outline-blue-400 w-full" placeholder="Digite o título do livro" />
                                    </fieldset>
                                    <fieldset className="fieldset text-sm">
                                        <legend className="fieldset-legend flex items-center gap-1"><FaUser /> Autor</legend>
                                        <input type="text" {...register("author")} className="input rounded-lg border border-gray-200 outline-blue-400 w-full" placeholder="Nome do autor" />
                                    </fieldset>
                                    <fieldset className="fieldset text-sm">
                                        <legend className="fieldset-legend flex items-center gap-1"><FaHashtag /> ISBN</legend>
                                        <input type="text" {...register("isbn")} className="input rounded-lg border border-gray-200 outline-blue-400 w-full" placeholder="978-0000000000" />
                                    </fieldset>
                                    <fieldset className="fieldset text-sm">
                                        <legend className="fieldset-legend flex items-center gap-1"><FaLayerGroup /> Categoria</legend>
                                        <input type="text" {...register("category")} className="input rounded-lg border border-gray-200 outline-blue-400 w-full" placeholder="Ex: Romance, Ficção, Terror..." />
                                    </fieldset>
                                    <fieldset className="fieldset text-sm">
                                        <legend className="fieldset-legend flex items-center gap-1"><FaCalendar /> Ano de Publicação</legend>
                                        <input type="text" {...register("year")} className="input rounded-lg border border-gray-200 outline-blue-400 w-full" placeholder="2025" />
                                    </fieldset>
                                </div>
                            </div>

                            {/* Seção Descrição */}
                            <div className="flex flex-col gap-2">
                                <fieldset className="fieldset text-sm">
                                    <legend className="fieldset-legend flex items-center gap-1"><FaAlignLeft /> Descrição</legend>
                                    <textarea {...register("description")} className="textarea rounded-lg border border-gray-200 outline-blue-400 w-full h-24" placeholder="Digite uma breve descrição do livro, incluindo sinopse, temas abordados ou informações relevantes para os leitores..."></textarea>
                                    <p className="text-xs text-gray-400 mt-1">Uma boa descrição ajuda os leitores a encontrar e escolher o livro certo.</p>
                                </fieldset>
                            </div>

                            <div className="flex self-end gap-4 pt-4">
                                <button type="button" className="btn rounded-xl bg-white" onClick={() => document.getElementById(modalId).close()}>Cancelar</button>
                                <button type="submit" className="btn bg-sky-700 px-10 text-white rounded-xl">
                                    Adicionar Livro
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}
