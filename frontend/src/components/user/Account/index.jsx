import { SectionSettings } from "./SectionAccSettings";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext"
import { useUserUpdate } from "../../../hooks/user"

export const UserAccount = () => {
    const { user, isLoading } = useContext(AuthContext);
    const { handleUpdateUser, error, isSubmitting } = useUserUpdate(user?.id);

    return (
        <div className="p-8 mt-12 bg-neutral-50/40 mt-15 rounded-xl border border-gray-200 w-full flex flex-col justify-center">
            <SectionSettings
                isLoading={isLoading}
                redirectTo="/user/profile"
                defaultName={user.name}
                defaultEmail={user.email}
                handleUpdate={handleUpdateUser}
                error={error}
                isSubmitting={isSubmitting}
            />
        </div>
    )
}