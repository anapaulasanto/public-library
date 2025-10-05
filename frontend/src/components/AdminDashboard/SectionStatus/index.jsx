import { Card } from "../CardAdmin";
import { Carousel } from "../CarouselMobile";
import { ContentTitle } from "../ContentTitle";

export function SectionStatus() {
    return (
        <section className="p-8 pb-16 bg-neutral-50/40 mt-1 rounded-xl border border-gray-200">
            <ContentTitle h1="Dashboard" p="Visão geral do sistema da biblioteca digital" />
            <Card />
            <Carousel />
        </section>
    )
}