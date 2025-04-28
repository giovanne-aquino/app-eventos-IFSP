import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function WelcomeBanner() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="relative w-screen h-screen rounded-[50px] overflow-hidden">
        {/* Fundo com imagem de pessoas */}
        <Image
          src="/Banner.svg"
          alt="Evento IFSP"
          fill
          className="object-cover"
        />

        {/* Sobreposição verde com opacidade */}
        <div className="absolute inset-0 bg-green-600 bg-opacity-25 flex items-center justify-between px-16 py-20 text-white">
          {/* Texto do lado esquerdo */}
          <div>
            <p className="text-lg mb-2">Seja bem vindo ao</p>
            <h1 className="text-5xl font-bold leading-tight">
              Portal Eventos <br />
              IFSP
            </h1>
            <Button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded shadow">
              Confira os eventos
            </Button>
          </div>

          {/* Imagem do calendário no lado direito */}
          <div className="relative w-[612px] h-[547px]">
            <Image
              src="/Calendar.svg"
              alt="Calendário"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
