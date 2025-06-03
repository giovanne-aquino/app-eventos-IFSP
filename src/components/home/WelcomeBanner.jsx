import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function WelcomeBanner() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="relative w-screen h-screen rounded-[50px] overflow-hidden">
        {/* Fundo com imagem de pessoas */}
        <Image
          src="/Banner.svg"
          alt="Evento IFSP"
          fill
          className="object-cover"
        />

        {/* Sobreposição verde com opacidade */}
        <div className="absolute inset-0 bg-green-600 bg-opacity-25 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-10 lg:py-20 text-white">
          {/* Texto do lado esquerdo */}
          <div className="text-center lg:text-left max-w-xl mx-auto">
            <p className="text-base lg:text-lg mb-2">Seja bem vindo ao</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Portal Eventos <br />
              IFSP
            </h1>
            <Button className="mt-6 sm:mt-8 lg:mt-10 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded shadow">
              Confira os eventos
            </Button>
          </div>

          {/* Imagem do calendário no lado direito */}
          <div className="relative w-60 h-52 sm:w-96 sm:h-80 lg:w-[612px] lg:h-[547px] mt-8 lg:mt-0">
            <Image
              src="/Calendar.svg"
              alt="Calendário"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
