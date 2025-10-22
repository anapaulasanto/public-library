import bgImg from '../../../assets/bg-home.jpg'
import { CardHeader } from '../CardHeader'

export const HeaderHome = () => {
    return (
        <header class="h-screen max-w-screen bg-center flex flex-col items-center justify-center relative animated-bg">
            <img src={bgImg} alt="Foto de livros" class="h-screen w-full opacity-25" />
            <CardHeader />
        </header>
        
    )
}