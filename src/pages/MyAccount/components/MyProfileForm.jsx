import { useState, useEffect } from "react";
import { toast } from "sonner";

import url from "../../../services/url";
import api from "../../../services/api";
import { getUser } from "../../../services/userService";
import { getAddress } from "../../../services/userService";

import { Input } from "../../../components/Input";
import FilledButton from "../../../components/FilledButton";

export default function MyProfileForm(){
    const [user, setUser] = useState([]);
    const [icone, setIcone] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            const userRes = await getUser();
            setUser(userRes.data);
        };

        fetchData();
    }, [icone]); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await api.put(`/usuarios/${user.uuid}`, 
                {
                    ...user,
                    ativo: 1
                }, 
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
            });
            setUser(response.data.data);
            toast.success("Seus dados foram salvos!");
        }catch(error){
            console.log(error);
            toast.error("Erro ao editar perfil." || error.data.message);

        }
    }

    const handleImage = (e) => {
        const file = e.target.files[0];
        setIcone(file);

        handleSubmitImagem(file);
    }

    const handleSubmitImagem = async (file) => {
        const fd = new FormData();

        fd.append("icone", file);

        try{
            const response = await api.post(`/usuarios/${user.uuid}/icon`, 
                fd, 
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
            setIcone(true);
        }catch(error){
            console.log("Erro ao editar icone de perfil: ", error);
        }
    }

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    return(
        <form className="bg-white p-8 rounded-md shadow-cont" onSubmit={handleSubmit}>
            <h1 className="mb-5 text-xl font-bold text-purple">Dados Pessoais</h1>

            <div className="flex items-center gap-5">
                <div className="w-[80px] h-[80px] rounded-full bg-gray-200">
                    <img 
                        src={user?.icone?.slice(0,5) === "https" ? user.icone : url + "/tmp/img/users/" + user?.icone} 
                        alt="Icone do usuário" 
                        className="rounded-full h-full w-full"
                        onError={(e) => {
                            e.target.src = url + "/public/img/users/default.png";
                        }}
                    />
                </div>
                
                <input type="file" name="icone" id="icone" className="hidden" onChange={handleImage} />
                <label 
                    htmlFor="icone"
                    type="button" 
                    className="rounded-full py-1 px-8 bg-purple-tr text-purple font-semibold cursor-pointer transition duration-400 ease hover:bg-purple-h"
                >
                Alterar
                </label>
            </div>

            <hr className="mt-5 text-purple"/>

            <div className="mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                    <Input 
                        label={"Nome de usuário"} 
                        type="text"
                        name="usuario"
                        value={user.usuario}
                        onChange={handleChange}
                    />
                    <Input 
                        label={"Nome"} 
                        type="text"
                        name="nome"
                        value={user.nome}
                        onChange={handleChange}
                    />

                    <Input 
                        label={"Email"} 
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />

                    <Input 
                        label={"Telefone"}
                        type="text"
                        name="telefone"
                        value={user.telefone}
                        onChange={handleChange}
                    />
                    
                </div>
            </div>

            <div className="flex justify-center mt-5">
                <FilledButton text={"Salvar alterações"} type="submit" />
            </div>
        </form>
    )
}