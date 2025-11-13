import React from "react";
import { SectionCountReviews } from "./sectionCountReviews";
import { SectionWriteReview } from "./sectionWriteReview";
import { SectionReviews } from "./sectionReviews";
import { useReviewesBook } from "../../../../hooks/book/index.js";

export const Main = ({ book }) => {
    const { data: reviews, isLoading, isError } = useReviewesBook(book.id);

    return (
        <div className="flex flex-col items-center gap-10 mt-20">
            <SectionCountReviews reviews={reviews} isError={isError} isLoading={isLoading} />
            <SectionWriteReview book={book} />
            <SectionReviews reviews={reviews} isError={isError} isLoading={isLoading} />
        </div>
    )
};
