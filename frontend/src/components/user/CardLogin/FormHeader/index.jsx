import favicon from '../../../../assets/favicon.png'

export function FormHeader({ title, subtitle }) {
    return (
        <header class="flex flex-col items-center pt-3">
            <img src={favicon} alt="Logo da biblioteca" />
            <h1 class="text-2xl text-gradient font-semibold pb-3">{title}</h1>
            <p class="text-gray-500 text-base text-base text-center">{subtitle}</p>
        </header>
    )
}