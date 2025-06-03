"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [active, setActive] = useState("inicio");
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: "Início", key: "inicio" },
        { name: "Eventos", key: "eventos" },
        { name: "Sobre", key: "sobre" },
        { name: "Criar evento", key: "criar" },
    ];

    return (
        <header className="bg-[#034833] text-white h-[117px]">
            <div className="max-w-screen-xl mx-auto px-4 h-full flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <img 
                        src="https://s3-alpha-sig.figma.com/img/e3f2/d744/43123e918c90887cd4342e5a9c3f7e67?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XH-BSJJcO2lcHvNZHWcNyj78hVGgVx69c61CvYQdJMg4v6IAqDYbpny3IuWhOvZ7vHan1zapenLPiT4oAgM2YhJUBEg1kNq056qYVAVTXdhP1Jt6WDoPzZ2utK3n47gW-DAnKk1a3ebfFWpKs7xre4ygxOMajU0kEsmAAK8qJ9DIPW9W4~QHvhrVd-Z5IqLqFbsrtnTeI38K1faxKBGXbCg7k9GmqDjI6Kkz1PhmtZD09wENBTtFugVA2Ne05pOuS9aRUQAZ89A0483DbU5wA0IBZUzrY-rbyo9geG9F2Fsvv2-ObQfwv1ZXw4d~Shiwms-fCpztMCwPvDBpgUU4yQ__"
                        alt="IFSP Cubatão"
                        className="h-24 invert brightness-0 object-contain"
                        /*TODO: GET THE CHANGED LOGO */
                    />
                </div>

                {/* Menu - Desktop */}
                <nav className="hidden md:flex gap-10 h-[49px] items-center">
                    {navItems.map((item) => (
                        <button
                        key={item.key}
                        onClick={() => setActive(item.key)}
                        className="relative h-full flex items-center pb-1"
                        >
                        <span className={`transition ${item.key === active ? "font-semibold" : ""}`}>
                            {item.name}
                        </span>
                        {item.key === active && (
                            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-lime-400" />
                        )}
                        </button>
                    ))}
                </nav>

                {/* Login/Logout/Profile - Desktop */}
                <div className="hidden md:block">
                    <IsLoggedIn isLoggedIn={false} />
                </div>

                {/* Hamburguer Menu - Mobile */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Menu items Mobile */}
            {menuOpen && (
                <div className="md:hidden bg-[#034833] px-4 pb-4 border-t border-[#046E4A]">
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <button
                                key={item.key}
                                onClick={() => {
                                    setActive(item.key);
                                    setMenuOpen(false);
                                }}
                                className="text-left"
                            >
                                <span className={item.key === active ? "font-semibold" : ""}>{item.name}</span>
                            </button>
                        ))}
                    </nav>

                    <div className="mt-4">
                        <IsLoggedIn isLoggedIn={false} />
                    </div>
                </div>
            )}
        </header>
    );
}

export function IsLoggedIn({ isLoggedIn }) {
    return (
        <div className="flex items-center gap-4">
            {isLoggedIn ? (
                <>
                    <a href="#" className="hover:underline">Sair</a>
                    <img
                        src="https://www.figma.com/design/M3AGbbfm2u25TKYwWHLR3A/Eventos-IFSP_CBT--Copy-?node-id=2028-531&t=maMTtzkKhbtWKlQp-4"
                        alt="Foto de perfil usuario"
                        className="h-10 w-10 rounded-full bg-gray-300"
                        /*TODO: USE THE SVG */
                    />
                </>
            ) : (
                <>
                    <a href="#" className="text-white hover:underline transition">Entrar</a>
                    <a
                        href="#"
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition"
                    >
                        Cadastrar
                    </a>
                </>
            )}
        </div>
    );
}