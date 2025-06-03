"use client";

import { useState } from "react";
import Image from "next/image";
import ifsp_logo1 from "./images/ifsp_logo1.png";
import newAccount from "./images/newAccount.png";
import passwordHide from "./images/icons/passwordHide.ico";
import passwordShow from "./images/Icons/passwordShow.ico";

export default function signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 bg-[#36b325] text-white flex flex-col justify-center items-center p-10 rounded-r-3xl relative">
        <div className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Crie aqui sua conta e <br />
          comece a se inscrever <br />
          nos nossos melhores <br />
          eventos!
        </div>
        <div className="mb-2">
          <Image src={newAccount} alt="Nova conta" width={365} />
        </div>
        <div className="absolute bottom-4 left-4">
          <Image src={ifsp_logo1} alt="Logo IFSP" width={200}/>
        </div>
      </div>

      {/* Lado direito com formulário */}
      <div className="w-1/2 bg-white flex items-center justify-center p-10 rounded-l-3xl">
        <form className="w-full max-w-md space-y-6">
          <h2 className="text-2xl font-bold text-[#36b325]">Criar uma conta</h2>

          <div>
            <label className="block text-sm">Nome Completo</label>
            <input
              type="text"
              placeholder="Digite seu nome completo"
              className="w-full border rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm">E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full border rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm">Senha</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Digite uma senha"
                className="w-full border rounded-md px-4 py-2 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-xl"
              >
                {showPassword ? (
                  <Image
                    src={passwordHide}
                    alt="Ocultar senha"
                    width={20}
                  />
                ) : (
                  <Image
                    src={passwordShow}
                    alt="Mostrar senha"
                    width={20}
                  />
                )}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm">Confirmar Senha</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Digite sua senha novamente"
                className="w-full border rounded-md px-4 py-2 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2.5 text-xl"
              >
                {showConfirmPassword ? (
                  <Image
                    src={passwordHide}
                    alt="Ocultar senha"
                    width={20}
                  />
                ) : (
                  <Image
                    src={passwordShow}
                    alt="Mostrar senha"
                    width={20}
                  />
                )}
              </button>
            </div>
          </div>

          <p className="text-sm">
            Já possui uma conta?{" "}
            <a className="text-[#36b325] font-medium" href="#">
              Login
            </a>
          </p>

          <button
            type="submit"
            className="w-full bg-[#36b325] text-white py-2 rounded hover:bg-green-700 transition"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
