import React, { useContext } from "react";
import { NavUser } from "../../components/user/Profile/Nav";
import { Outlet } from "react-router-dom";
import { Container } from "../../components/admin/Container";
import { AuthContext } from "../../context/AuthContext";
import { NavHome } from "../../components/Home/Nav";
import { NavAdmin } from "../../components/admin/nav/NavAdmin";

export const LayoutCatalog = () => {
    const { user } = useContext(AuthContext);
    const role = user?.role
    let CurrentNav = NavHome;

    if (role === 'ADMIN') {
        CurrentNav = NavAdmin;
    } else if (role === 'USER') {
        CurrentNav = NavUser;
    }

    return (
        <div>
            <CurrentNav />
            <div className="flex justify-center">
                <Container>
                    <Outlet />
                </Container>
            </div>
        </div>
    )
};
