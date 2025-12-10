import { useState, useEffect } from "react";
import { FaPencilAlt, FaBook, FaUser, FaHashtag, FaLayerGroup, FaCalendar, FaAlignLeft, FaImage } from "react-icons/fa";
import { useEditBook } from "../../../../../hooks/book/index.js";
import { ModalSucess } from "../../../../ModalSucess/index.jsx";
import { ModalError } from "../../../../ModalError/index.jsx";

export const ModalEditBooks = ({ modalId, h1, p, cover, title, author, category, year, defaultValue6, description, bookId }) => {
    const [formData, setFormData] = useState({
        img: cover || '',
        title: title || '',
        author: author || '',
        isbn: defaultValue6 || '',
        categoryName: category || '',
        year: year || '',
        description: description || ''
    });

    const { handleEditBook, isSuccess, isError, error } = useEditBook(bookId);

    useEffect(() => {
        setFormData({
            img: cover || '',
            title: title || '',
            author: author || '',
            isbn: defaultValue6 || '',
            categoryName: category || '',
            year: year || '',
            description: description || ''
        });
    }, [cover, title, author, defaultValue6, category, year, description]);

    useEffect(() => {
        if (isSuccess) {
            const modal = document.getElementById('modal_success_edit_book');
            if (modal && !modal.open) {
                modal.showModal();
            }
        }
    }, [isSuccess]);

    useEffect(() => {
        if (isError) {
            const modal = document.getElementById('modal_error_edit_book');
            if (modal && !modal.open) {
                modal.showModal();
            }
        }
    }, [isError]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleEditBook(formData);
        document.getElementById(modalId).close();
    };
    return (
        <div>
            <button className="btn border-none bg-transparent hover:bg-blue-200 hover:cursor-pointer" onClick={() => document.getElementById(modalId).showModal()}><FaPencilAlt /></button>
            <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex flex-col items-center max-w-4xl">
                    <div className="flex flex-col self-start w-full">
                        <h3 className="font-semibold text-lg">{h1}</h3>
                        <p className="text-gray-500">{p}</p>
                    </div>

                    <div className="modal-action w-full">
                        <form method="dialog" onSubmit={handleSubmit} className="flex flex-col justify-start w-full gap-6">

                            {/* Seção Capa do Livro */}
                            <div className="flex flex-col gap-2 pt-4">
                                <h4 className="font-semibold flex items-center gap-2"><FaImage /> Capa do Livro</h4>
                                <div className="flex gap-6 items-start">
                                    <div className="flex items-center justify-center w-40">
                                        <img src={cover} alt={title} />
                                    </div>
                                    <fieldset className="fieldset text-sm flex-grow">
                                        <legend className="fieldset-legend">URL da Imagem de Capa</legend>
                                        <input 
                                            type="text" 
                                            name="img"
                                            className="input rounded-lg border border-gray-200 outline-blue-400 w-full" 
                                            value={formData.img} 
                                            onChange={handleChange}
                                            placeholder="https://exemplo.com/capa-do-livro.jpg" 
                                        />
                                        <p className="text-xs text-gray-400 mt-1">Cole a URL de uma imagem de capa do livro. Formatos suportados: JPG, PNG, JPEG.</p>
                                    </fieldset>
                                </div>
                            </div>

                            {/* Seção Informações Básicas */}
                            <div className="flex flex-col gap-2">
                                <h4 className="font-semibold">Informações Básicas</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <fieldset className="fieldset text-sm">
                                        <legend className="fieldset-legend flex items-center gap-1"><FaBook /> Título</legend>
                                        <input 
                                            type="text" 
                                            name="title"
                                            className="input rounded-lg border border-gray-200 outline-blue-400 w-full" 
                                            value={formData.title} 
                                            onChange={handleChange}
                                            placeholder="Digite o título do livro" 
                                        />
                                    </fieldset>
                                    <fieldset className="fieldset text-sm">
                                        <legend className="fieldset-legend flex items-center gap-1"><FaUser /> Autor</legend>
                                        <input 
                                            type="text" 
                                            name="author"
                                            className="input rounded-lg border border-gray-200 outline-blue-400 w-full" 
                                            value={formData.author} 
                                            onChange={handleChange}
                                            placeholder="Nome do autor" 
                                        />
                                    </fieldset>
                                    <fieldset className="fieldset text-sm">
                                        <legend className="fieldset-legend flex items-center gap-1"><FaHashtag /> ISBN</legend>
                                        <input 
                                            type="text" 
                                            name="isbn"
                                            className="input rounded-lg border border-gray-200 outline-blue-400 w-full" 
                                            value={formData.isbn} 
                                            onChange={handleChange}
                                            placeholder="978-0000000000" 
                                        />
                                    </fieldset>
                                    <fieldset className="fieldset text-sm">
                                        <legend className="fieldset-legend flex items-center gap-1"><FaLayerGroup /> Categoria</legend>
                                        <input 
                                            type="text" 
                                            name="categoryName"
                                            className="input rounded-lg border border-gray-200 outline-blue-400 w-full" 
                                            value={formData.categoryName} 
                                            onChange={handleChange}
                                            placeholder="Ex: Romance, Ficção, Terror..." 
                                        />
                                    </fieldset>
                                    <fieldset className="fieldset text-sm">
                                        <legend className="fieldset-legend flex items-center gap-1"><FaCalendar /> Ano de Publicação</legend>
                                        <input 
                                            type="text" 
                                            name="year"
                                            className="input rounded-lg border border-gray-200 outline-blue-400 w-full" 
                                            value={formData.year} 
                                            onChange={handleChange}
                                            placeholder="2025" 
                                        />
                                    </fieldset>
                                </div>
                            </div>

                            {/* Seção Descrição */}
                            <div className="flex flex-col gap-2">
                                <fieldset className="fieldset text-sm">
                                    <legend className="fieldset-legend flex items-center gap-1"><FaAlignLeft /> Descrição</legend>
                                    <textarea 
                                        name="description"
                                        className="textarea rounded-lg border border-gray-200 outline-blue-400 w-full h-24" 
                                        value={formData.description} 
                                        onChange={handleChange}
                                        placeholder="Digite uma breve descrição do livro, incluindo sinopse, temas abordados ou informações relevantes para os leitores..."
                                    ></textarea>
                                    <p className="text-xs text-gray-400 mt-1">Uma boa descrição ajuda os leitores a encontrar e escolher o livro certo.</p>
                                </fieldset>
                            </div>

                            <div className="flex self-end gap-4 pt-4">
                                <button type="button" className="btn rounded-xl bg-white" onClick={() => document.getElementById(modalId).close()}>Cancelar</button>
                                <button
                                    type="submit"
                                    className="btn bg-sky-700 px-10 text-white rounded-xl"
                                >
                                    Salvar alterações
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {isSuccess && (
                    <ModalSucess
                        modalId="modal_success_edit_book"
                        h1="Livro editado!"
                        p="As alterações do livro foram salvas com sucesso."
                    />
                )}

                {isError && (
                    <ModalError
                        modalId="modal_error_edit_book"
                        h1="Erro ao editar livro"
                        p={error?.message || "Ocorreu um erro ao tentar editar o livro."}
                    />
                )}
            </dialog>
        </div>
    )
}