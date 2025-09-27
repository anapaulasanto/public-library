import iconLib from "../../../assets/Icon.png"

export function FormHeader() {
    return (
        <header class="flex flex-col items-center">
            <img src={iconLib} alt="icone de biblioteca" />
            <h1 class="text-2xl">Biblioteca Online</h1>
            <p class="text-gray-500 text-sm">Faça login para acessar seu acervo digital</p>
        </header>
    )
}