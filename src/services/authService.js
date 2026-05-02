import api from "./api";

// Buscar link autenticacao google
export const getGoogleLink = async () => {
    try{
        const response = await api.get('/google-link');
        return response.data;
    }catch(error){
        console.log("Erro ao buscar link de autenticação: ", error);
        throw error;
    }
};

//Login de usuário com google
export const authGoogle = async (code) => {
    try {
        const response = await api.post('/google-auth', {code});
        
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Login de usuário
export const loginUser = async (credentials) => {
    try{
        const response = await api.post('/auth', credentials);
        return response.data
    }catch(error){
        console.log("Erro ao fazer login: ", error);
        throw error;
    }
};

// Registro de usuário
export const registerUser = async (userData) => {
    try{
        const response = await api.post('/usuarios', userData);
        return response.data;
    }catch (error){
        console.log("Erro ao cadastrar usuário: ", error);
        throw error;
    }
};