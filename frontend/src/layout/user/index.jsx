import { Outlet } from "react-router-dom";
import { Container } from "../../components/admin/Container";
import { NavUser } from "../../components/user/Profile/Nav";
import { Header } from "../../components/user/Profile/Header";

export const UserProfileLayout = () => {
    return (
        <div>
            <NavUser />
            <div className="flex justify-center">
                <Container>
                    <Header />
                    <Outlet />
                </Container>
            </div>
        </div >
    )
}