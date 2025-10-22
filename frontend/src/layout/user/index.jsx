import { Outlet } from "react-router-dom";
import { Container } from "../../components/admin/Container";
import { Nav } from "../../components/user/Profile/Nav";
import { Header } from "../../components/user/Profile/Header";

export const UserProfileLayout = () => {
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