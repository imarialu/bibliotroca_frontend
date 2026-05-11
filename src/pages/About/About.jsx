import MainLayout from "../../layouts/MainLayout"
import Heading from "../../components/Heading"

export default function About(){
    return(
        <>
            <MainLayout>
                <header className="md:ml-20 w-[80%] md:w-[720px] xl:w-[1100px]">
                    <Heading text={"Sobre o Bibliotroca"}/>
                </header>

                <section className="w-[80%] md:ml-20 md:w-[720px] xl:w-[1100px]">
                    <div className="flex flex-col items-center p-10 mb-8 bg-white rounded-sm shadow-cont">
                        <div className="w-[150px] my-3 sm:w-[200px]">
                            <img src="/logo2.png" alt="Logo do Bibliotroca" />
                        </div>

                        <div className="w-[85%] mt-5 text-lg font-medium text-center">
                            <p className="mb-5">
                                O <span className="text-purple">Bibliotroca</span> tem a intenção de incentivar e promover o acesso democrático e sustentável à leitura. 
                                Acreditamos que livros têm muito mais valor quando circulam e chegam às mãos de novos leitores.
                                Nossa plataforma foi criada para facilitar a troca de livros de forma simples, prática e colaborativa. 
                                Aqui, você pode disponibilizar livros que já leu e/ou encontrar novos títulos.
                            </p>

                            <p>
                                Mais do que um site de trocas, o <span className="text-purple">Bibliotroca</span> foi feito para quem acredita no poder da leitura, 
                                no consumo consciente e na possibilidade de dar uma nova vida aos livros esquecidos na estante.
                            </p>

                            <div className="mt-5">
                                <h1 className="mb-5 text-3xl font-outfit font-semibold text-purple">Como funciona</h1>

                                <p>Através do site, você pode cadastrar os livros que deseja trocar e/ou explorar os livros disponíveis de outros leitores 
                                e negociar uma troca pelo WhatsApp disponibilizado pelo usuário.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </MainLayout>
        </>
    )
}