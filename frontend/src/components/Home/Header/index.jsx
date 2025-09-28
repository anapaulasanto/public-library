import bgImg from '../../../assets/bg-home.jpg'
import { CardWelcome } from '../CardHeader'

export function HeaderHome() {
    return (
        <header class="h-screen max-w-screen bg-center flex flex-col items-center justify-center relative">
            <img src={bgImg} alt="Foto de livros" class="h-[95%] w-[95%] rounded-xl" />
            <CardWelcome />
        </header>
        
    )
}