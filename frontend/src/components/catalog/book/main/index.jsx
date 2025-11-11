import React from "react";
import { SectionCountReviews } from "./sectionCountReviews";
import { SectionWriteReview } from "./sectionWriteReview";
import { SectionReviews } from "./sectionReviews";

export const Main = () => {
    return (
        <div>
            <SectionCountReviews />
            <SectionWriteReview />
            <SectionReviews />
        </div>
    )
};
