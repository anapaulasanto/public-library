import { FooterHome } from "./Footer";
import { HeaderHome } from "./Header";
import { MainHome } from "./Main";

export function HomePage() {
    return (
        <div class="bg-zinc-200 min-h-screen">
            <HeaderHome />
            <MainHome />
            <FooterHome />
        </div>
    )
}