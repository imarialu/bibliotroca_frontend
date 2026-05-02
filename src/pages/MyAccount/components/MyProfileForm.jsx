import { useState, useEffect } from "react";

import { Input } from "../../../components/Input";
import FilledButton from "../../../components/FilledButton";

export default function MyProfileForm(){
    return(
        <form className="bg-white p-8 rounded-md shadow-cont" onSubmit={handleSubmit}>
            <h1 className="mb-5 text-xl font-bold text-purple">Dados Pessoais</h1>

            <div className="flex items-center gap-5">
                <div className="w-[80px] h-[80px] rounded-full bg-gray-200">
                    <img 
                        alt="Icone do usuário" 
                        className="rounded-full h-full w-full"
                    />
                </div>
                
                <input type="file" name="icone" id="icone" className="hidden" onChange={} />
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
                    />

                    <Input 
                        label={"Nome"}
                        type="text"
                    />

                    <Input 
                        label={"Email"}
                        type="email"
                    />

                    <Input 
                        label={"Telefone"}
                        type="text"
                    />
                    
                </div>
            </div>

            <div className="flex justify-center mt-5">
                <FilledButton text={"Salvar alterações"} type="submit" />
            </div>
        </form>
    )
}