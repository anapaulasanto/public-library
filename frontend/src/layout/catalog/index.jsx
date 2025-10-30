import React from "react";
import { NavUser } from "../../components/user/Profile/Nav";
import { Outlet } from "react-router-dom";
import { Container } from "../../components/admin/Container";

export const LayoutCatalog = () => {
    return (
        <div>
            <NavUser />
            <div className="flex justify-center">
                <Container>
                    <Outlet />
                </Container>
            </div>
        </div>
    )
};
