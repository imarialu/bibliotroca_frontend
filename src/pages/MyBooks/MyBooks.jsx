import { useState } from "react";

import MainLayout from "../../layouts/MainLayout";
import Heading from "../../components/Heading";
import GhostButton from "./components/GhostButton";
import AvailableBooksSection from "./components/AvailableBooks/AvailableBooksSection";
import ExchangedBooksSection from "./components/ExchangedBooks/ExchangedBooksSection";

import { PiBooks } from 'react-icons/pi';
import { HiOutlineRefresh } from 'react-icons/hi';

export default function MyBooks(){
    const [activeContainer, setActiveContainer] = useState("container-available");

    return (
        <>
            <MainLayout>
                <header className="flex flex-col items-center md:inline-block md:items-start w-[80%] md:ml-20 md:w-[720px] xl:w-[1100px]">
                    <Heading text={"Meus Livros"}/>

                    <div className="flex justify-center md:justify-start gap-2 md:gap-4">
                        <GhostButton 
                            isActive={activeContainer === "container-available"} 
                            onClick={() => setActiveContainer("container-available")} 
                            icon={<PiBooks className="text-xl md:text-2xl"/>} 
                            text={"Disponíveis"}>
                        </GhostButton>

                        <GhostButton 
                            isActive={activeContainer === "container-exchanged"} 
                            onClick={() => setActiveContainer("container-exchanged")} 
                            icon={<HiOutlineRefresh className="text-xl md:text-2xl"/>} 
                            text={"Trocados"}>
                        </GhostButton>
                    </div>
                    <hr className="mt-4 text-purple"/>
                </header>

                <section className="flex flex-col items-center md:items-start w-[90%] md:ml-20 md:w-[720px] xl:w-[1100px]">
                    {activeContainer === "container-available" && <AvailableBooksSection/>}
                    {activeContainer === "container-exchanged" && <ExchangedBooksSection/>}
                </section>
            </MainLayout>
        </>
    )
}