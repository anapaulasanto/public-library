import iconLib from "../../../assets/Icon.png"

export function FormHeader({ title, subtitle }) {
    return (
        <header class="flex flex-col items-center">
            <img src={iconLib} alt="icone de biblioteca" />
            <h1 class="text-2xl text-blue-600 font-semibold">{title}</h1>
            <p class="text-gray-500 text-base text-base text-center">{subtitle}</p>
        </header>
    )
}