import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import FilledButton from "../../components/FilledButton";
import Modal from "../../components/Modal";
import { BsArrowLeftShort } from 'react-icons/bs';


export default function BookDetails(){
    return(
        <>
            <MainLayout>
                <div className="w-[60%] mt-10 md:mt-0 md:ml-20 md:w-[720px] xl:w-[1100px]">   
                    <button 
                    onClick={() => navigate(-1)} 
                    className="flex mt-10 mb-8 gap-1 py-1 px-3 border border-purple-tr rounded-md text-purple transition duration-400 ease hover:border-purple md:mt-8">
                        <BsArrowLeftShort className="text-2xl"/>
                        Voltar
                    </button>
                </div>

                <section className="w-[60%] mb-10 md:ml-20 md:w-[720px] xl:w-[1100px]">
                    <div className="p-10 bg-white rounded-sm shadow-cont">
                        <div className="flex flex-col justify-center md:grid grid-cols-2 xl:grid-cols-3">
                            <div className="col-span-1 flex justify-center">
                                <div className="w-[250px] h-[300px] md:w-[230px] md:h-[340px] md:mr-10 xl:mr-12">
                                    <img 
                                        src={} 
                                        alt="Icone do usuário" 
                                        className="rounded-sm h-full w-full"
                                    />
                                </div>

                                <div className="md:w-[1px] md:h-[100%] md:mr-10 bg-purple"/>
                            </div>

                            <div className="flex flex-col justify-between col-span-1 mt-2 md:mt-0 xl:col-span-2">
                                <div className="flex flex-col">
                                    <p className="text-purple font-semibold md:text-md xl:text-xl">
                                        {}
                                    </p>
                                    <h1 className="font-semibold text-lg xl:text-3xl">
                                        {}
                                    </h1>

                                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-3 xl:gap-4">
                                        <p className="md:text-lg xl:text-xl">{}</p>
                                        <div className="w-12 h-[1px] bg-purple md:rounded-full md:size-[7px]"/>
                                        <p className="md:text-lg xl:text-xl">{} páginas</p>
                                    </div>
                                </div>

                                <div className="w-full mt-10 text- text-justify xl:text-xl">
                                    <p>{}</p>
                                </div>

                                <div className="mt-10">
                                    <h2 className="text-lg text-purple font-semibold mb-3 xl:text-xl">Disponibilizado por {}</h2>
                                    <div className="flex items-center gap-4">
                                        <div className="size-[50px] rounded-full">
                                            <img 
                                                alt="Usuario icone" 
                                                className="rounded-full h-full w-full"
                                            />
                                        </div>
                                        <div className="font-medium">
                                            <p className="text-gray-300">{}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex mt-10 justify-center">
                            <FilledButton 
                                text={"Tenho interesse"} 
                                onClick={() => setShowModal(true)}
                            />
                        </div>

                        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                            <h1 className="text-xl text-purple font-bold">
                                Conheça novas histórias!
                            </h1>

                            <div className="flex items-center justify-center bg-purple-tr rounded-full size-[160px]">
                                <img src="../imgs/modal-img.png" alt="Garota com um livro na mão" className="size-[150px] rounded-full"/>
                            </div>

                            <p className="w-[90%] text-center font-semibold sm:w-[75%]">
                                Vá em busca do livro que tanto deseja! <br/>
                                Entre em contato com o dono do mesmo e o ofereça outro em troca para negociação. 
                            </p>

                            <div className="mt-2">
                                <a>                                    
                                    <FilledButton text={"Entrar em contato"}/>
                                </a>
                            </div>
                        </Modal>
                    </div>
                </section>
            </MainLayout>
        </>
    )
}