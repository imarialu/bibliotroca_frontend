import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { SidebarLink } from './SidebarLink';
import { HiOutlineHome } from 'react-icons/hi2';
import { PiBookBookmark } from 'react-icons/pi';
import { IoAddCircleOutline } from 'react-icons/io5';
import { PiInfo } from "react-icons/pi";
import { HiOutlineUser } from "react-icons/hi";
import { MdLogout } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";

export default function Sidebar(){
    const { logout } = useAuth();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return(
        <>
            <aside className="flex flex-wrap stick md:fixed z-[1] justify-center items-center w-full py-2 bg-purple md:flex-col md:h-[98%] md:w-[75px] md:p-4 md:rounded-2xl md:m-2">
                <nav className="flex justify-between items-center w-[85%] md:flex-col md:h-[95%]">
                    <div>
                        <div className="md:flex md:justify-center">
                            <img src="/logo.png" alt="Logo do Bibliotroca" className="size-[35px]"/>
                         </div>

                        <hr className="hidden md:block md:mt-3 md:text-darkpurple"/>

                        <ul className="hidden gap-5 items-center md:flex md:flex-col md:mt-5">
                            <SidebarLink url={"/"} icon={<HiOutlineHome className="text-2xl"/>}/>
                            <SidebarLink url={"/meus-livros"} icon={<PiBookBookmark className="text-2xl"/>}/>
                            <SidebarLink url={"/cadastro-de-livros"} icon={<IoAddCircleOutline className="text-2xl"/>}/>
                            <SidebarLink url={"/sobre"} icon={<PiInfo className="text-2xl"/>}/>                             
                            <SidebarLink url={"/minha-conta"} icon={<HiOutlineUser className="text-2xl"/>}/>                        
                        </ul>
                    </div>

                    <div className="hidden md:block">
                        <button 
                            onClick={handleLogout} 
                            className="flex flex-col items-center gap-1 p-2 rounded-lg text-darkpurple transition duration-500 ease hover:text-white hover:bg-darkpurple-tr"
                        >
                            <MdLogout className="md:text-2xl"/>
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button 
                            onClick={toggleNavbar} 
                            className="flex flex-col items-center p-2 rounded-lg text-darkpurple transition duration-500 ease hover:text-white"
                        >
                            {isOpen ? "X" : <HiOutlineMenu className="text-2xl"/>}
                        </button>
                    </div>
                </nav>
                {isOpen && (
                    <ul className="flex flex-col gap-1 items-center md:hidden">
                        <SidebarLink url={"/"} text={"Início"}/>
                        <SidebarLink url={"/meus-livros"} text={"Meus Livros"}/>
                        <SidebarLink url={"/cadastro-de-livros"} text={"Cadastro de livros"}/>
                        <SidebarLink url={"/sobre"} text={"Sobre nós"}/>                             
                        <SidebarLink url={"/minha-conta"} text={"Minha conta"}/>

                        <button 
                            onClick={handleLogout} 
                            className="flex items-center gap-1 p-1 rounded-lg text-darkpurple transition duration-500 ease hover:text-white"
                        >
                            Sair
                        </button>                        
                    </ul>
                )}
            </aside>
        </>
    )
}