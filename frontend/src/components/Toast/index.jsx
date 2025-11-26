import React from "react";
export const Toast = React.memo(({ message }) => {
    return (
        <div className="toast">
            <div className="alert alert-info bg-gradient text-white">
                <span>{message}</span>
            </div>
        </div>
    );
});