import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/user/Home";
import { Login } from "../pages/user/Login";
import { LoginAdmin } from "../pages/admin/Login";
import { SignUp } from "../pages/user/SignUp";
import { SignUpAdmin } from "../pages/admin/SignUp";
import { Dashboard } from "../pages/admin/Dashboard"
import { AuthLayout } from "../layout/auth";
import { AdminLayout } from "../layout/admin";
import { Profile } from "../pages/user/Profile";
import { UserProfileLayout } from "../layout/user";
import { Account } from "../pages/user/Account";
import { Catalog } from "../pages/catalog";
import { LayoutCatalog } from "../layout/catalog";

export const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="" element={<Home />} />
                </Route>
                <Route path="/auth/user" element={<AuthLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="sign-up" element={<SignUp />} />
                </Route>
                <Route path="/auth/admin" element={<AuthLayout />}>
                    <Route path="login" element={<LoginAdmin />} />
                    <Route path="sign-up" element={<SignUpAdmin />} />
                </Route>
                <Route path="/admin" element={<AdminLayout />}>
                    <Route path="dashboard" element={<Dashboard />} />
                </Route>
                <Route path="/user" element={<UserProfileLayout />}>
                    <Route path="profile" element={<Profile />} />
                    <Route path="profile/account" element={<Account />} />
                </Route>
                <Route path="/catalog" element={<LayoutCatalog />}>
                    <Route path="books" element={<Catalog />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}