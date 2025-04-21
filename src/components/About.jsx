import Desenvolvedores from "./Desenvolvedores";

const About = () => {
  return (
    <>
      {/* Bloco verde "Sobre" */}
      <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="bg-green-500 text-white rounded-2xl p-6 md:p-10 shadow-md mb-10">
  <h1 className="text-3xl font-bold">Sobre</h1>
</div>
</div>

      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Sobre o Projeto</h1>
        <p className="mb-4 text-gray-700">
          O <strong>App Eventos IFSP</strong> é uma aplicação web desenvolvida por estudantes do <strong>Instituto Federal de São Paulo – Campus Cubatão</strong> como parte da disciplina <strong>Extensão III</strong>, oferecida no curso superior de <strong>Tecnologia em Análise e Desenvolvimento de Sistemas (ADS)</strong>.
        </p>

        <p className="mb-4 text-gray-700">
          A disciplina de Extensão III tem como objetivo proporcionar experiências práticas por meio do desenvolvimento de projetos com impacto social e educacional. Os estudantes são incentivados a aplicar seus conhecimentos técnicos em soluções que atendam às necessidades reais da comunidade acadêmica.
        </p>

        <p className="mb-4 text-gray-700">
          Neste contexto, o App Eventos IFSP foi criado para <strong>auxiliar alunos, professores e demais colaboradores na organização e gerenciamento de eventos acadêmicos e institucionais</strong>. A plataforma oferece funcionalidades como <strong>divulgação de eventos, controle de inscrições, emissão de certificados</strong> e outros recursos importantes para a promoção de atividades no IFSP.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Tecnologias Utilizadas</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li><strong>Next.js</strong>: Framework moderno baseado em React, voltado para desempenho e escalabilidade.</li>
          <li><strong>Tailwind CSS</strong>: Utilizado com o <strong>shadcn/ui</strong> para a criação de interfaces modernas e responsivas.</li>
          <li><strong>ShadCN/UI</strong>: Biblioteca de componentes acessíveis e reutilizáveis baseada em Radix UI.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Objetivos do Projeto</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Aplicar os conhecimentos adquiridos durante o curso em um projeto real.</li>
          <li>Oferecer uma solução digital eficiente para a gestão de eventos do IFSP.</li>
          <li>Desenvolver habilidades em trabalho em equipe, organização de código e boas práticas de desenvolvimento web.</li>
        </ul>
      </div>

      <div className="p-6 max-w-4xl mx-auto">
        <Desenvolvedores />
      </div>
    </>
  );
};

export default About;
