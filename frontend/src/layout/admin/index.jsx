import { Outlet } from "react-router-dom";
import { Container } from "../../components/admin/Container";
import { SectionStatus } from "../../components/admin/main/sectionDashboard/SectionStatus";
import { NavAdmin } from "../../components/admin/nav/NavAdmin"
import { Menu } from "../../components/admin/aside/MenuBarDesktop";

export const AdminLayout = () => {
    return (
        <div>
            <NavAdmin />
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