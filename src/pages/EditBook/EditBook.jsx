import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import { Input } from "../../components/Input";
import FilledButton from "../../components/FilledButton";

import { BsArrowLeftShort } from 'react-icons/bs';

export default function EditBook(){
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
                    <form className="flex flex-col p-8 mb-8 bg-white rounded-sm shadow-cont" onSubmit={}>
                        <div className="flex flex-col md:flex-row xl:grid grid-cols-3">
                            <div className="flex flex-col justify-between mb-10 md:mb-0 md:mr-8 xl:col-span-1 items-center w-[230px] md:w-[230px] h-[330px] md:h-[330px]">
                                <img 
                                    src={} 
                                    alt="Capa do livro" 
                                    className="w-full h-full rounded-md object-cover"
                                />
                                <div className="flex w-[230px] md:w-[230px] mt-10 rounded-full justify-center items-center py-1 px-10 bg-purple-tr text-purple font-semibold cursor-pointer transition duration-400 ease hover:bg-purple-h">
                                    <input type="file" id="imagem" className="hidden" name="imagem" onChange={} />
                                    <label htmlFor="imagem" className="">Alterar imagem</label>
                                </div>
                            </div>

                            <div className="xl:col-span-2">
                                <div className="flex flex-col">
                                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                                        <Input 
                                            label={"Título"}  
                                        />
                                        <Input 
                                            label={"Autor"} 
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                                        <Input 
                                            label={"Nº de páginas"} 
                                        />
                                        <div className="flex flex-col">
                                            <label htmlFor="category" className="text-lg">Categoria</label>
                                            <select 
                                                onChange={handleChange} 
                                                className="w-[325px] h-8 mt-1 mb-3 pl-2 border border-gray rounded-sm focus:outline-none focus:border-purple md:w-[190px] xl:w-[340px]">
                                                    {genres.map((categorie) => {
                                                        return <option key={categorie.uuid} value={categorie.uuid}>
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
                                                checked={book.estado === "novo"} />
                                            Novo
                                        </label>
                                        
                                        <label htmlFor="likeNew" className="flex gap-2">
                                            <input 
                                                type="radio"
                                                checked={book.estado === "seminovo"} />
                                            Seminovo                                                
                                        </label>

                                        <label htmlFor="oldBook" className="flex gap-2">
                                            <input 
                                            type="radio"
                                            checked={book.estado === "antigo"} />
                                            Antigo
                                        </label>
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="description" className="text-lg mb-1">Descrição sobre o livro</label>
                                        <textarea 
                                            name="descricao"
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