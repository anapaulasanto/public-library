import { FooterHome } from "./Footer";
import { HeaderHome } from "./Header";
import { MainHome } from "./Main";
import { Nav } from "./Nav";


export function HomePage() {
    return (
        <div class="bg-zinc-100">
            <Nav />
            <HeaderHome />
            <MainHome />
            <FooterHome />
        </div>
    )
}