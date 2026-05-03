import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

import url from "../../services/url";
import api from "../../services/api";

import MainLayout from "../../layouts/MainLayout";
import { Input } from "../../components/Input";
import FilledButton from "../../components/FilledButton";

import { BsArrowLeftShort } from 'react-icons/bs';
import { getBookById, getGenre } from "../../services/bookService";

export default function EditBook(){
    const [genres, setGenres] = useState([]);
    const [book, setBook] = useState([]);
    const [imagem, setImagem] = useState(null);
    const {uuid} = useParams();
    const situacaoMap = ["novo", "seminovo", "antigo"];

    const navigate = useNavigate();

    useEffect(() => {
        const fetchBook = async () => {
            const categoriesRes = await getGenre();
            setGenres(categoriesRes.data);

            const response = await getBookById(uuid);
            setBook(response);
        }
        
        fetchBook();
    }, [imagem, uuid]);
    console.log(book);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await api.put(`/livros/${book.uuid}`, 
                book,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
            });

            if(response){
                toast.success("Livro editado com sucesso!");
                navigate('/meus-livros');
            }else{
                toast.error("Erro ao editar livro." || res.error);
            }
        }catch(error){
            console.log("Erro ao editar livro: ", error);
        }
    }

    const handleImage = (e) => {
        const file = e.target.files[0];
        setImagem(file);

        handleSubmitImagem(file);
    }

    const handleSubmitImagem = async (file) => {
        const fd = new FormData();

        fd.append("imagem", file);

        try{
            const response = await api.post(`/livros/${book.uuid}/imagem`, 
                fd, 
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
            setImagem(true);
            navigate(`/editar-livro/${book.uuid}`);
        }catch(error){
            console.log("Erro ao editar livro: ", error);
        }
    }

    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value,
        })
    }

    return(
        <>
            <MainLayout>
                <header className="mt-12 md:mt-0 md:ml-20 w-[80%] md:w-[720px] xl:w-[1100px]">
                    <div className="w-[60%] md:w-[720px] xl:w-[1100px]">   
                        <button 
                            onClick={() => navigate(-1)} 
                            className="flex mt-10 gap-1 py-1 px-3 border border-purple-tr rounded-md text-purple transition duration-400 ease hover:border-purple md:mt-8">
                                <BsArrowLeftShort className="text-2xl"/>
                                Voltar
                        </button>
                    </div>
                    <h1 className="text-3xl font-outfit font-semibold text-purple my-5">Editar livro</h1>
                </header>

                <section className="md:ml-20 w-[80%] md:w-[720px] xl:w-[1100px]">
                    <form className="flex flex-col p-8 mb-8 bg-white rounded-sm shadow-cont" onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row xl:grid grid-cols-3">
                            <div className="flex flex-col justify-between mb-10 md:mb-0 md:mr-8 xl:col-span-1 items-center w-[230px] md:w-[230px] h-[330px] md:h-[330px]">
                                <img 
                                    src={url + "/tmp/img/livros/" + book.imagem} 
                                    alt="Capa do livro" 
                                    className="w-full h-full rounded-md object-cover"
                                    onError={(e) => {
                                        e.target.src = url + "/public/img/livros/default-book.png";
                                    }}
                                />
                                <div className="flex w-[230px] md:w-[230px] mt-10 rounded-full justify-center items-center py-1 px-10 bg-purple-tr text-purple font-semibold cursor-pointer transition duration-400 ease hover:bg-purple-h">
                                    <input 
                                        type="file" 
                                        id="imagem" 
                                        name="imagem"
                                        className="hidden"
                                        onChange={handleImage}
                                    />
                                    <label htmlFor="imagem" className="">Alterar imagem</label>
                                </div>
                            </div>

                            <div className="xl:col-span-2">
                                <div className="flex flex-col">
                                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                                        <Input 
                                            label={"Título"} 
                                            name="titulo" 
                                            value={book.titulo} 
                                            onChange={handleChange} 
                                        />
                                        <Input 
                                            label={"Autor"} 
                                            name="autor" 
                                            value={book.autor} 
                                            onChange={handleChange} 
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                                        <Input 
                                            label={"Nº de páginas"} 
                                            name="paginas" 
                                            value={book.paginas} 
                                            onChange={handleChange} 
                                        />
                                        <div className="flex flex-col">
                                            <label htmlFor="category" className="text-lg">Categoria</label>
                                            <select 
                                                name="categoria_uuid" 
                                                id="category" 
                                                onChange={handleChange} 
                                                className="w-[325px] h-8 mt-1 mb-3 pl-2 border border-gray rounded-sm focus:outline-none focus:border-purple md:w-[190px] xl:w-[340px]">
                                                    {genres.map((categorie) => {
                                                        return <option key={categorie.uuid} value={categorie.uuid} >
                                                            {categorie.nome}
                                                        </option>
                                                    })}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-1">
                                    <label htmlFor="status" className="text-lg">Estado do livro</label>
                                    <div className="flex gap-4 my-2">
                                        <label htmlFor="newBook" className="flex gap-2">
                                            <input 
                                                type="radio" 
                                                name="estado" 
                                                id="newBook" 
                                                value="novo" 
                                                checked={book.estado === "novo"} 
                                                onChange={(e) => {handleChange(e); setBook(prev => ({ ...prev, estado: "novo" }))}}
                                            />
                                                Novo
                                        </label>
                                        
                                        <label htmlFor="likeNew" className="flex gap-2">
                                            <input 
                                                type="radio" 
                                                name="estado" 
                                                id="likeNew" 
                                                value="seminovo"
                                                checked={book.estado === "seminovo"} 
                                                onChange={(e) => {handleChange(e); setBook(prev => ({ ...prev, estado: "seminovo" }))}}
                                            />
                                                Seminovo                                                
                                        </label>

                                        <label htmlFor="oldBook" className="flex gap-2">
                                            <input 
                                                type="radio" 
                                                name="estado" 
                                                id="oldBook" 
                                                value="antigo" 
                                                checked={book.estado === "antigo"} 
                                                onChange={(e) => {handleChange(e); setBook(prev => ({ ...prev, estado: "antigo" }))}}
                                            />
                                                Antigo
                                        </label>
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="description" className="text-lg mb-1">Descrição sobre o livro</label>
                                        <textarea 
                                            name="descricao" 
                                            id="description" 
                                            value={book.descricao} 
                                            rows="5" 
                                            className="resize-none p-2 border border-gray rounded-sm focus:outline-none focus:border-purple">
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-8">
                            <FilledButton text={"Salvar alterações"} type="submit" />
                        </div>
                    </form>
                </section>
            </MainLayout>
        </>
    )
} 