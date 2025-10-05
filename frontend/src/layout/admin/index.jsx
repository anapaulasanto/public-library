import { Outlet } from "react-router-dom";
import { Container } from "../../components/AdminDashboard/Container";
import { SectionStatus } from "../../components/AdminDashboard/SectionStatus";
import { Nav } from "../../components/AdminDashboard/NavAdmin"
import { Menu } from "../../components/AdminDashboard/MenuBarDesktop";

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