import Desenvolvedores from "./Desenvolvedores";

const About = () => {
  return (
    <>
      {/* Cabeçalho "Sobre" */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-green-500 text-white rounded-2xl py-12 px-6 md:py-16 md:px-10 shadow-md mb-10 text-left">
          <h1 className="text-3xl md:text-4xl font-bold">Sobre</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10 space-y-16"> 
  <div className="w-full h-1 bg-green-500 mb-6" /> </div>

      {/* Seção do conteúdo em blocos alternados */}
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-20">
        {/* Bloco 1 - Imagem esquerda / Texto direita */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="w-full h-64 bg-gray-300 rounded-xl" /> {/* Placeholder da imagem */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Sobre o Projeto</h2>
            <p className="mb-4 text-gray-700">
              O <strong>App Eventos IFSP</strong> é uma aplicação web desenvolvida por estudantes do <strong>Instituto Federal de São Paulo – Campus Cubatão</strong> como parte da disciplina <strong>Extensão III</strong>, no curso superior de <strong>ADS</strong>.
            </p>
            <p className="mb-4 text-gray-700">
              A disciplina busca promover experiências práticas com impacto social e educacional. Os alunos aplicam seus conhecimentos técnicos em soluções para a comunidade.
            </p>
            <p className="mb-4 text-gray-700">
              O App auxilia na <strong>organização de eventos</strong>, oferecendo <strong>inscrições, emissão de certificados</strong> e outras funcionalidades.
            </p>
          </div>
        </div>

        {/* Bloco 2 - Texto esquerda / Imagem direita */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Tecnologias Utilizadas</h2>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li><strong>Next.js</strong>: Framework moderno baseado em React.</li>
              <li><strong>Tailwind CSS</strong>: Utilizado com <strong>shadcn/ui</strong> para estilo responsivo.</li>
              <li><strong>ShadCN/UI</strong>: Componentes acessíveis com base no Radix UI.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Objetivos do Projeto</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Aplicar conhecimentos práticos adquiridos no curso.</li>
              <li>Oferecer uma solução digital para a gestão de eventos.</li>
              <li>Desenvolver habilidades de equipe e boas práticas de desenvolvimento.</li>
            </ul>
          </div>
          <div className="w-full h-64 bg-gray-300 rounded-xl" /> {/* Placeholder da imagem */}
        </div>

       

        {/* Bloco 3 - Desenvolvedores */}
      
          <Desenvolvedores />
        </div>
      
    </>
  );
};

export default About;
