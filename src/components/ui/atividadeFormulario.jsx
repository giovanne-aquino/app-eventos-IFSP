'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

export default function AtividadeFormulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    const atividade = {
      Nome: data.Nome,
      OrganizadorDoEvento: Number(data.OrganizadorDoEvento),
      Descricao: data.Descricao,
      Formato: data.Formato,
      Local: data.Local,
      DocumentoDoUser: data.DocumentoDoUser === 'on', // Checkbox
      Banner: data.Banner?.[0] || null, // Arquivo selecionado
      Tags: data.Tags
        ? data.Tags.split(',').map((tag) => tag.trim()).filter((tag) => tag !== '')
        : [],
      Periodo: {
        dataInicio: data.DataInicio,
        horaInicio: data.HoraInicio,
      },
      Tipo: data.Tipo,
      CapacidadeMaxima: Number(data.CapacidadeMaxima),
      HorasComplementares: Number(data.HorasComplementares),
      EventoID: Number(data.EventoID),
    };

    console.log('Objeto Atividade para envio:', atividade);
  }

  return (
    <main className="container mx-auto min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full bg-white p-8 rounded shadow"
      >
        <h1 className="text-2xl font-bold mb-6">Crie uma atividade</h1>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-medium">Nome da atividade</label>
            <input
              type="text"
              {...register('Nome', { required: true })}
              placeholder="Ex: Techweek"
              className="w-full border-gray-300 rounded p-2 mt-1"
            />
            {errors.Nome && (
              <p className="text-red-500 text-sm">O nome da atividade é obrigatório.</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Formato</label>
            <select
              {...register('Formato')}
              className="w-full border-gray-300 rounded p-2 mt-1"
            >
              <option value="presencial">Presencial</option>
              <option value="online">Online</option>
              <option value="híbrido">Híbrido</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 mb-4">
          <div>
            <label className="block font-medium">Local</label>
            <input
              type="text"
              {...register('Local', { required: true })}
              placeholder="Ex: Techweek"
              className="w-full border-gray-300 rounded p-2 mt-1"
            />
            {errors.Local && (
              <p className="text-red-500 text-sm">O local é obrigatório.</p>
            )}
          </div>
          <div className="grid grid-cols-2">
            <div>
              <label className="block font-medium">Data</label>
              <input
                type="date"
                {...register('DataInicio', { required: true })}
                className="w-full border-gray-300 rounded p-2 mt-1"
              />
              {errors.DataInicio && (
                <p className="text-red-500 text-sm">A data é obrigatória.</p>
              )}
            </div>
            <div>
              <label className="block font-medium">Horário</label>
              <input
                type="time"
                {...register('HoraInicio', { required: true })}
                className="w-full border-gray-300 rounded p-2 mt-1"
              />
              {errors.HoraInicio && (
                <p className="text-red-500 text-sm">O horário é obrigatório.</p>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 mb-4">
          <div>
            <label className="block font-medium">Descrição</label>
            <textarea
              {...register('Descricao', { required: true })}
              placeholder="Digite aqui a descrição da atividade."
              className="w-full border-gray-300 rounded p-2 mt-1"
              rows={4}
            />
            {errors.Descricao && (
              <p className="text-red-500 text-sm">A descrição é obrigatória.</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Criar Evento
        </button>
      </form>
    </main>
  );
}
