import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

import { Input } from "../../components/Input";

import { useAuth } from "../../hooks/useAuth";
import { getGoogleLink, authGoogle } from "../../services/authService";

export default function Login(){
    const navigate = useNavigate();
    const { login, googleLogin } = useAuth();
    const [googleLink, setGoogleLink] = useState(null);
    const [formData, setFormData] = useState({
        email: "",
        senha: "",
    });

    const {search} = useLocation();
    const params = new URLSearchParams(search);
    const hasSentCode = useRef(false);

    useEffect(() => {
        const code = params.get('code');
        if (!code) return;
        if (hasSentCode.current) return;

        hasSentCode.current = true;

        const authGoogle = async () => {
            const response = await googleLogin(code);

            if (response) {
                toast.success("Login realizado com sucesso");
                navigate('/');
            } else {
                toast.error("Não foi possível autenticar com Google");
            }
        }

        authGoogle();
    }, [search]);

    useEffect(() => {
        if (params.get('code')) return;

        const link = async () => {
            const response = await getGoogleLink();
            setGoogleLink(response.data);
        }

        link();
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            const response = await login(formData);
            (response)
            
            if(response){
                toast.success("Login feito com sucesso!");
                navigate('/');
            }else{
                toast.error("Erro ao realizar o login." || res.error);
            }
        }catch(error){
            console.log("Erro ao realizar login: ", error);
        }
    }   
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return(
        <>
            <main className="flex md:flex-row w-full h-screen bg-purple">
                <div className="hidden bg-purple md:block md:w-1/2 md:flex md:items-center md:justify-center">
                    <img src="./imgs/bg.png" alt="Três leitores encostados em uma pilha de livros" className="w-[600px]"/>
                </div>

                <div className="flex flex-col w-full md:w-1/2 bg-white items-center justify-center md:rounded-l-2xl">
                    <div className="space-y-2 mb-8">
                        <h1 className="text-4xl text-center font-bold text-purple">Login</h1>
                        <p className="text-lg">
                            Não possui uma conta?{" "}
                            <Link to="/cadastro" className="font-semibold text-purple">Cadastre-se</Link>
                        </p>
                    </div>
                    
                    <form onSubmit={handleLogin} className="flex flex-col mb-5 w-[350px] lg:w-[400px]">
                        <Input 
                            label={"E-mail"} 
                            type={"email"}
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <Input 
                            label={"Senha"} 
                            type={"password"}
                            name="senha" 
                            value={formData.senha} 
                            onChange={handleChange}
                        />
                        <div className="flex justify-center mt-10">
                            <button type="submit" className="w-[200px] h-8 bg-purple text-white font-bold rounded-full cursor-pointer">Entrar</button>
                        </div>
                    </form>

                    <div className="flex items-center mb-5">
                        <hr className="w-[180px] border-gray"/>
                        <p className="mx-2">Ou</p>
                        <hr className="w-[180px] border-gray"/>
                    </div>

                    <a href={googleLink} className="flex aling-center gap-2 px-2 py-1 border border-purple rounded-sm cursor-pointer hover:text-purple">
                        <div className="flex items-center justify-center w-[25px]">
                            <img src="/icons/icon-google.png" alt="Ícone do Google" className="size-[20px] items-center"/>
                        </div>
                        Entre com o Google
                    </a>
                </div>
            </main>
        </>
    )
}