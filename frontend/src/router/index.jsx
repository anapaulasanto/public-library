import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/user/Home";
import Login from "../pages/user/Login";
import { SignUp } from "../pages/user/SignUp";
import { Dashboard } from "../pages/admin/Dashboard"
import { AuthLayout } from "../layout/auth";
import { AdminLayout } from "../layout/admin";
import { Profile } from "../pages/user/Profile";
import { UserProfileLayout } from "../layout/user";
import { Account } from "../pages/user/Account";

export function AppRouter() {
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
                <Route path="/admin" element={<AdminLayout />}>
                    <Route path="dashboard" element={<Dashboard />} />
                </Route>
                <Route path="/user" element={<UserProfileLayout />}>
                    <Route path="profile" element={<Profile />} />
                    <Route path="account" element={<Account />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}