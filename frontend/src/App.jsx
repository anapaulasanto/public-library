import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
