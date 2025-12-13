import axios from "axios";

// base do backend
const API_URL = "http://localhost:8081";

// ==================== LOGIN ====================
export const loginUser = async (credentials) => {
    const { data } = await axios.post(
        `${API_URL}/auth/login`,
        credentials,
        { withCredentials: true } // NECESSÁRIO para cookie JWT
    );
    return data;
};

export const loginAdmin = async (credentials) => {
    return loginUser(credentials);
};

// ==================== REGISTER ====================
export const registerUser = async (userData) => {
    const { data } = await axios.post(
        `${API_URL}/auth/register`,
        userData,
        { withCredentials: true } // NECESSÁRIO para cookie JWT
    );
    return data; // { id, name, email, role, ... }
};

export const registerAdmin = async (adminData) => {
    const payload = {
        ...adminData,
        role: "ADMIN",
    };

    const { data } = await axios.post(
        `${API_URL}/auth/register`,
        payload,
        { withCredentials: true } // NECESSÁRIO para cookie JWT
    );

    console.log("Passou pelo registro de admin no service", data);
    return data;
};

// ==================== SESSÃO ====================
export const checkAuthStatus = async () => {
    try {
        const { data } = await axios.get(
            `${API_URL}/auth/logged`,
            { withCredentials: true } // Lê o cookie JWT
        );
        console.log(data);
        return data;

    } catch (error) {
        if (
            error.response &&
            (error.response.status === 401 || error.response.status === 403)
        ) {
            return null; // usuário não autenticado
        }
        throw error;
    }
};

export const logoutUser = async () => {
    const { data } = await axios.post(
        `${API_URL}/auth/logout`,
        {},
        { withCredentials: true }
    );
    console.log(data);
    return data;
};
