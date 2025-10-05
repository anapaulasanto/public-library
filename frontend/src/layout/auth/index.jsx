import { Outlet } from "react-router-dom"
import bgImg from "../../assets/bg-auth.jfif"

export function AuthLayout() {
    return (
        <div style={{ backgroundImage: `url(${bgImg})` }} className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center py-2">
            <div className="absolute inset-0 bg-black/50 min-h-full flex justify-center items-center">
                <Outlet />
            </div>
        </div>
    )
}