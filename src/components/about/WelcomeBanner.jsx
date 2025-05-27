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
        <div className="absolute inset-0 bg-green-600 bg-opacity-25 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-10 lg:py-20 text-white">
          {/* 
            Parte RESPONSIVA:
            - flex-col: empilha verticalmente em telas pequenas
            - lg:flex-row: organiza em linha em telas ≥1024px
            - px-6 / py-10: padding menor em telas pequenas
            - lg:px-16 / lg:py-20: padding maior em telas grandes
          }

          {/* Texto do lado esquerdo */}
          <div className="text-center lg:text-left max-w-xl mx-auto">
            {/* 
    Parte RESPONSIVA:
    - text-center para telas pequenas (padrão mobile)
    - lg:text-left para alinhar à esquerda em telas grandes
    - max-w-xl para limitar a largura do texto
    - mx-auto para centralizar o conteúdo horizontalmente no mobile
  */}
            <p className="text-base lg:text-lg mb-2">Seja bem vindo ao</p>
            {/* 
    Parte RESPONSIVA:
    - text-base no mobile, lg:text-lg em telas maiores
    - Ajusta o tamanho da fonte conforme o tamanho da tela
  */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Portal Eventos <br />
              IFSP
            </h1>
            {/* 
    Parte RESPONSIVA:
    - Título escala com sm: e lg: para telas menores e maiores
  */}
            <Button className="mt-6 sm:mt-8 lg:mt-10 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded shadow">
              Confira os eventos
            </Button>
            {/* 
    Parte RESPONSIVA:
    - mt-6 no mobile, mais espaçamento (mt-8) em telas médias (sm) e mt-10 para telas grandes
  */}
          </div>

          {/* Imagem do calendário no lado direito */}
          <div className="relative w-60 h-52 sm:w-96 sm:h-80 lg:w-[612px] lg:h-[547px] mt-8 lg:mt-0">
            <Image
              src="/Calendar.svg"
              alt="Calendário"
              fill
              className="object-contain"
            />
            {/* 
              Parte RESPONSIVA:
              - w/h pequenas em mobile (w-60 h-52)
              - aumenta em sm (SMALL) e lg (LARGE)
              - mt-8: afasta do texto quando empilhado
              - lg:mt-0: remove espaçamento quando lado a lado
            */}
          </div>
        </div>
      </div>
    </main>
  );
}
