import { HeaderHome } from "./HeaderHome";
import { MainHome } from "./MainHome";

export function HomePage() {
    return (
        <div class="bg-zinc-200 min-h-screen">
            <HeaderHome />
            <MainHome />
        </div>
    )
}