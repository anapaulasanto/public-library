import { useContext, useEffect } from "react";
import { FooterHome } from "./Footer";
import { HeaderHome } from "./Header";
import { MainHome } from "./Main";
import {NavHome} from "./Nav";
import { AuthContext } from "../../context/AuthContext";
import {NavUser} from "../user/Profile/Nav"
import {NavAdmin} from "../admin/nav/NavAdmin"

export const HomePage = () => {
    const { user, isLoadingSession } = useContext(AuthContext);
    const role = user?.role

    let CurrentNav = NavHome;

    if (!isLoadingSession && user) {
        if (role === 'USER') {
            CurrentNav = NavUser;
        } else if (role === 'ADMIN') {
            CurrentNav = NavAdmin;
        }
    }

    return (
        <div class="bg-zinc-100">
            <CurrentNav />
            <HeaderHome />
            <MainHome />
            <FooterHome />
        </div>
    )
}