import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AccountSettings() {
    return (
        <main className="flex h-screen flex-col">
            <header className="flex items-center justify-center w-full bg-emerald-800 text-white min-h-[6rem]">
                Header
            </header>
                <h1 className="text-emerald-800 font-bold text-3xl lg:ml-28 lg:mt-4 ml-4 mt-4">Configurações da Conta</h1>
            {/* Section with forms and User Photo */}
            <section className="flex lg:flex-row flex-col justify-center w-full h-fit lg:px-28 lg:py-6 p-4 lg:gap-12 gap-6">
                {/* div forms */}
                <div className="flex flex-col w-full">
                    <h2 className="text-green-500 font-semibold pb-1">Informações do usuário</h2>
                    <form  action="" className="flex flex-col gap-2 bg-gray-100 border-gray-200 border-2 rounded-md p-2">
                        <Label htmlFor="userName">Nome completo:</Label>
                        <Input type="text" id="userName" placeholder="Digite seu nome completo" className="bg-white border-gray-400" />
                        {/* RG and CPF */}
                        <div className="flex gap-8">
                            <div className="w-full">
                                <Label htmlFor="userRg">RG:</Label>
                                <Input type="text" id="userRg" placeholder="00.000.000-0" className="bg-white border-gray-400" />
                            </div>
                            <div className="w-full">
                                <Label htmlFor="userCpf">CPF:</Label>
                                <Input type="text" id="userCpf" placeholder="000.000.000-00" className="bg-white border-gray-400" />
                            </div>
                        </div>
                        <Label htmlFor="userPassport">Passaporte:</Label>
                        <Input type="text" id="userPassport" placeholder="Digite o número de seu Passaporte" className="bg-white border-gray-400" />
                        <Label htmlFor="email">E-mail:</Label>
                        <Input type="email" id="email" placeholder="exemplo@email.com" className="bg-white border-gray-400" />
                        <Label htmlFor="userPassword">Nova Senha:</Label>
                        <Input type="password" id="userPassword" placeholder="exemplo@email.com" className="bg-white border-gray-400" />
                    </form>
                </div>

                {/* div user Photo */}
                <div className="flex flex-col items-center justify-center lg:w-fit w-full gap-2">
                    <h2 className="text-green-500 font-semibold pb-1">Foto de Perfil</h2>
                    <div className="flex items-center justify-center border-2 border-gray-200 bg-gray-100 rounded-md w-52 p-4">
                        <div className="relative flex items-center justify-center bg-gray-300 text-gray-100 rounded-full w-full h-full p-2">
                            {/* Uer icon svg */}
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="6" r="4" fill="#ffffff"></circle> <ellipse cx="12" cy="17" rx="7" ry="4" fill="#ffffff"></ellipse> </g>
                            </svg>
                            {/* camera icon svg */}
                            <svg className="absolute  bottom-1 right-6 h-8 p-1 bg-gray-100 border border-black rounded-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0">
                                </g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.342 4.985c.422-.724.633-1.085.927-1.348a2.5 2.5 0 0 1 .898-.516C9.542 3 9.96 3 10.797 3h2.405c.838 0 1.256 0 1.631.121a2.5 2.5 0 0 1 .898.516c.294.263.505.624.927 1.348L17.25 6H18c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C22 7.9 22 8.6 22 10v6c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C20.1 20 19.4 20 18 20H6c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 18.1 2 17.4 2 16v-6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 6 4.6 6 6 6h.75l.592-1.015zM12 17.05a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5zm2.7-4.75a2.7 2.7 0 1 1-5.4 0 2.7 2.7 0 0 1 5.4 0z" fill="#000000"></path></g>
                            </svg>
                        </div>
                    </div>
                    <Button className=" w-full bg-green-600 lg:mt-auto mt-8">Salvar</Button>
                </div>
            </section>
            <footer className="flex items-center justify-center w-full min-h-[10rem] bg-emerald-800 text-white">
                Footer
            </footer>
        </main>
    );
}