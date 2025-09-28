import { CardsHome } from '../Cards'
import { SectionData } from '../SectionData'
import { SectionReady } from '../SectionReady'

export function MainHome() {
    return (
        <main class="flex flex-col items-center justify-center text-center">
            <h1 class="text-3xl font-bold mt-10 mb-3">Por que escolher nossa biblioteca?</h1>
            <p class="text-gray-600 mb-10">Oferecemos uma experiência completa de leitura digital com recursos avançados para todos os tipos de leitores.</p>
            <CardsHome />
            <SectionData />
            <SectionReady />
        </main>

    )
}