import React from "react";
import { SectionCountReviews } from "./sectionCountReviews";
import { SectionWriteReview } from "./sectionWriteReview";
import { SectionReviews } from "./sectionReviews";

export const Main = () => {
    return (
        <div className="flex flex-col gap-10">
            <SectionCountReviews />
            <SectionWriteReview />
            <SectionReviews />
        </div>
    )
};
