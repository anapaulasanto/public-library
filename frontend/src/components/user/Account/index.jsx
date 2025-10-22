import { SectionSettings } from "./SectionAccSettings";
import { SectionSecurity } from "./SectionSecurity";

export const UserAccount = () => {
    return (
        <div className="p-8 mt-12 bg-neutral-50/40 mt-15 rounded-xl border border-gray-200 w-full flex flex-col justify-center">
            <SectionSettings />
            <SectionSecurity />
        </div>
    )
}