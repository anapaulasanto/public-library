import { Outlet } from "react-router-dom";
import { Container } from "../../components/admin/Container";
import { SectionStatus } from "../../components/admin/main/sectionDashboard/SectionStatus";
import { Nav } from "../../components/admin/nav/NavAdmin"
import { Menu } from "../../components/admin/aside/MenuBarDesktop";

export function AdminLayout() {
    return (
        <div>
            <Nav />
            <div className="flex">
                <Menu />
                <Container>
                    <SectionStatus />
                    <Outlet />
                </Container>
            </div>
        </div >
    )
}