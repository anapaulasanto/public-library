import React from "react";
import { Nav } from "../../components/user/Profile/Nav";
import { Outlet } from "react-router-dom";
import { Container } from "../../components/admin/Container";

export const LayoutCatalog = () => {
    return (
        <div>
            <Nav />
            <div className="flex justify-center">
                <Container>
                    <Outlet />
                </Container>
            </div>
        </div>
    )
};
