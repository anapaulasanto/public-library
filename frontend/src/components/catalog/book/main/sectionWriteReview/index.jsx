import React from "react";

export const SectionWriteReview = () => {
    return (
        <div className="flex flex-col gap-2 bg-neutral-200/50 mt-5 p-4 border border-neutral-300 rounded-xl w-[80%] mx-auto">
            <p className="text-2xl font-semibold">Escreva sua Avaliação</p>
            <p className="font-semibold">Sua nota para este livro</p>
            <div className="rating self-start">
                <input type="radio" name="rate-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                <input type="radio" name="rate-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                <input type="radio" name="rate-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                <input type="radio" name="rate-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                <input type="radio" name="rate-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
            </div>
            <p className="font-semibold pt-10">Seu comentário</p>
            <div>
                <form>
                    <textarea className="textarea w-full bg-neutral-200 border border-gray-300" placeholder="Compartilhe sua opinião sobre esse livro..."></textarea>
                    <button className="btn mt-8 bg-sky-600 px-4 text-white rounded-lg hover:cursor-pointer hover:bg-sky-600 duration-150" type="submit">Publicar</button>
                </form>
            </div>
        </div>
    )
};
