import { useState } from "react";

import { Input } from "../../../components/Input";
import FilledButton from "../../../components/FilledButton";

export default function SecurityForm(){
    return(
        <form className="bg-white p-8 rounded-md shadow-cont" onSubmit={handleSubmit}>
            <h1 className="mb-5 text-xl font-bold text-purple">Alterar Senha</h1>

            <div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <Input type="password" name="senhaAntiga" label={"Senha atual"} onChange={handleChange} />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <Input type="password" name="senha" label={"Nova senha"} onChange={handleChange}/>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <Input type="password" name="confirmacaoSenha" label={"Confirmar nova senha"} onChange={handleChange}/>
                </div>
            </div>

            <div className="flex mt-5 justify-center md:justify-start">
                <FilledButton text={"Atualizar Senha"}/>
            </div>
        </form>
    )
}