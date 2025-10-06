export function Fieldset({ htmlFor, label, placeholder, type, children, props }) {
    return (
        <fieldset class="flex flex-col justify-center w-full text-sm">
            <label htmlFor={htmlFor} class="font-semibold py-1">{label}</label>
            <div class="relative text-gray-500">
                {children}
                <input type={type} placeholder={placeholder} class="pl-8 border-none bg-gray-200 p-3 w-full rounded-lg outline-none" {...props} />
            </div>
        </fieldset>
    )
}