import api from "./api";

// Busca livros
export const getBook = async (titulo) => {
    try{
        const response = await api.get(`/livros?trocado=0${titulo != null ? `&titulo=${titulo}` : ""}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return response.data;
    }catch(error){
        console.log("Erro ao buscar livro: ", error);
        throw error;
    }
};

// Buscar livro por id
export const getBookById = async (uuid) => {
    try{
        const response = await api.get(`/livros/?uuid=${uuid}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return response.data.data[0];
    }catch(error){
        console.log("Erro ao buscar livro: ", error);
        throw error;
    }
};

export const getBooksUser = async (userRes) => {
    try{
        const response = await api.get(`/livros/user/${userRes.uuid}?trocado=0`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return response.data;
    }catch(error){
        console.log("Erro ao buscar livros: ", error);
        throw error
    }
}

// Buscar gênero
export const getGenre = async () => {
    try{
        const response = await api.get('/categorias', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return response.data;
    }catch(error){
        console.log("Erro ao buscar gênero: ", error);
        throw error;
    }
}

// Criar livro
export const createBook = async () => {
    try{
        const response = await api.post('/livros', bookData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return response.data;
    }catch(error){
        console.log("Erro ao cadastrar livro: ", error);
        throw error;
    }
};

// Atualizar livro
export const updateBook = async () => {
    try{
        const response = await api.put(`/livros/${uuid}`, bookData);
        return response.data;
    }catch(error){
        console.log("Erro ao atualizar livro: ", error);
        throw error;
    }
};

// Deletar livro
export const deleteBook = async (uuid) => {
    try{
        const response = await api.delete(`/livros/${uuid}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });

        return response.data;
    }catch(error){
        console.log("Erro ao deletar livro: ", error);
        throw error;
    }
};

export const getBookExchange = async (userRes) => {
    try{
        const response = await api.get(`/livros/user/${userRes.uuid}?trocado=1`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        return response.data;
    }catch(error){
        console.log("Erro ao buscar livros: ", error);
        throw error
    }
};

// Marcar livro como trocado
export const bookExchange = async (uuid) => {
    try{
        const response = await api.put(`/livros/${uuid}`, {
            trocado: 1
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    }catch(error){
        console.log("Erro ao marcar livro como trocado: ", error);
        throw error;
    }
};



