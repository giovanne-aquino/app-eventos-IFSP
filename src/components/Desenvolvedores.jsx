// src/components/Desenvolvedores.jsx

"use client";

const desenvolvedores = [
  { nome: "Alice da Silva Marinho Gomes", matricula: "CB3025772", foto: "Alice.jpeg" },
  { nome: "Atilio Almeida Costa", matricula: "CB3025497", foto: "Atilio.jpeg" },
  { nome: "Beatriz Bastos Borges", matricula: "CB3024946", foto: "Beatriz.jpeg" },
  { nome: "Bruno Souza da Costa", matricula: "CB3025411", foto: "Bruno.jpeg" },
  { nome: "Caua Barros da Costa", matricula: "CB3025179", foto: "Caua.jpeg" },
  { nome: "Cesar Beda Candido da Silva", matricula: "CB302704X", foto: "Cesar.jpeg" },
  { nome: "Eduardo Barbosa Rodrigues", matricula: "CB302637X", foto: "Eduardo.jpeg" },
  { nome: "Eduardo Miranda Silva Sousa", matricula: "CB3026604", foto: "Eduardo2.jpeg" },
  { nome: "Everson Pereira da Silva", matricula: "CB3026353", foto: "Everson.jpeg" },
  { nome: "Gabriel Afonso dos Santos", matricula: "CB3026167", foto: "Gabriel.jpg" },
  { nome: "Gabriela Otilia Wandenkolk Monteiro", matricula: "CB3026108", foto: "Gabriela.jpeg" },
  { nome: "Giovanne Brandão de Aquino", matricula: "CB3026591", foto: "Giovanne.jpeg" },
  { nome: "João Marcos Teles Silva", matricula: "CB3026787", foto: "Joao.jpeg" },
  { nome: "João Victor Crivoi Cesar Souza", matricula: "CB3026027", foto: "Joao2.jpeg" },
  { nome: "Júlia de Lemos Alves da Silva", matricula: "CB3026663", foto: "Julia.jpeg" },
  { nome: "Laysa Bernardes Campos Da Rocha", matricula: "CB3024873", foto: "Laysa.jpeg" },
  { nome: "Leandro Felix Nunes", matricula: "CB3026159", foto: "Leandro.jpeg" },
  { nome: "Leonardo de Lima Pedroso", matricula: "CB3026655", foto: "Leonardo.jpeg" },
  { nome: "Luan dos Santos Sales Pinheiro", matricula: "CB3025977", foto: "Luan.jpeg" },
  { nome: "Lucas Lopes Cruz", matricula: "CB3025284", foto: "Lucas.jpeg" },
  { nome: "Maria Eduarda Fodor", matricula: "CB3025063", foto: "Maria.jpeg" },
  { nome: "Matheus Leandro Terra Luciano", matricula: "CB3024881", foto: "Matheus.jpeg" },
  { nome: "Miguel Luizatto Alves", matricula: "CB3025039", foto: "Miguel.jpeg" },
  { nome: "Milena Costa de Andrade", matricula: "CB3027171", foto: "Milena.png" },
  { nome: "Pedro Xavier Oliveira", matricula: "CB3027376", foto: "Pedro.jpeg" },
  { nome: "Ricardo Queiroz Oliani", matricula: "CB3025543", foto: "Ricardo.jpg" },
  { nome: "Ronald Pereira Evangelista", matricula: "CB3020282", foto: "Ronald.jpeg" },
  { nome: "Sergio de Chong Wu", matricula: "CB3025691", foto: "Sergio.jpeg" },
  { nome: "Vinicius do Nascimento Ayres", matricula: "CB3025675", foto: "Vinicius.jpeg" },
  { nome: "Vinicius Pontes Oliva", matricula: "CB3025675", foto: "Vinicius2.jpeg" },
];

export default function Desenvolvedores() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Topo verde com subtítulo */}
      <div className="bg-green-800 text-white rounded-2xl p-6 md:p-10 shadow-md mb-10 text-center">
        <p className="text-sm text-gray-200 mb-1">Conheça os nossos</p>
        <h1 className="text-3xl md:text-4xl font-bold">Desenvolvedores</h1>
      </div>

      {/* Galeria de desenvolvedores */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {desenvolvedores.map((dev, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl p-4 text-center w-full max-w-xs">
            <img
              src={`/images/desenvolvedores/${dev.foto}`}
              alt={dev.nome}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-2"
            />
            <h3 className="font-semibold text-base">{dev.nome}</h3>
            <p className="text-sm text-gray-500">Matrícula: {dev.matricula}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
