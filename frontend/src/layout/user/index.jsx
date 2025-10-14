import { Outlet } from "react-router-dom";
import { Container } from "../../components/admin/Container";
import { SectionStatus } from "../../components/admin/main/sectionDashboard/SectionStatus";
import { Nav } from "../../components/user/Profile/Nav";
import { Header } from "../../components/user/Profile/Header";

export function UserProfileLayout() {
    return (
        <div>
            <Nav />
            <div className="flex justify-center">
                <Container>
                    <Header />
                    <Outlet />
                </Container>
            </div>
        </div >
    )
}