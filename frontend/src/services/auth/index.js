import axios from "axios";

export const loginUser = async (credentials) => {
    const { data } = await axios.post('/auth/login', credentials);
    return data;
};

export const loginAdmin = async (credentials) => {
    return loginUser(credentials);
};

export const registerUser = async (userData) => {
    const { data } = await axios.post('/auth/register', userData); //userData = { name, email, password }(role será 'USER' por padrão no backend)
    return data; // Retorna { id, name, email, role, ... }
};

export const registerAdmin = async (adminData) => {
    const payload = {
        ...adminData,
        role: 'ADMIN'
    }

    const { data } = await axios.post('/auth/register', payload); //adminData = { name, email, password, role: 'ADMIN' }
    console.log("Passou pelo registro de admin no service", data);
    
    return data; // Retorna { id, name, email, role, ... }
};

// --- Gerenciamento da sessão --- 

export const checkAuthStatus = async () => {
    try {
        const { data } = await axios.get('/auth/logged');
        console.log(data);
        return data; // Retorna { id, name, email, role, ... }
        
    } catch (error) {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            return null; // Não é um erro, é um estado válido (não autenticado).
            
        }
        throw error;
    }
};

export const logoutUser = async () => {
    const { data } = await axios.post('/auth/logout');
    console.log(data);
    
    return data;
};