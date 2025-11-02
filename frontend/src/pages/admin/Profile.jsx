import React, { useContext } from "react";
import { SectionSettings } from "../../components/user/Account/SectionAccSettings";
import { AuthContext } from "../../context/AuthContext";
import { useUserUpdate } from "../../hooks/user";

export const ProfileAdmin = () => {
    const { user, isLoading } = useContext(AuthContext);
    const { handleUpdateUser, error, isSubmitting } = useUserUpdate();

    return (
        <div className="p-8 my-12 bg-neutral-50/40 w-[90%] mt-15 rounded-xl border border-gray-200 flex flex-col justify-center">
            <SectionSettings
                isLoading={isLoading}
                redirectTo="/admin/dashboard"
                defaultName={user.name}
                defaultEmail={user.email}
                handleUpdate={handleUpdateUser}
                error={error}
                isSubmitting={isSubmitting}
            />
        </div>
    )
};
