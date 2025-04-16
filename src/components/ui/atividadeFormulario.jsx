'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function AtividadeFormulario() {
  const [activitiesList, setActivitiesList] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
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

    setActivitiesList((prevActivities) => [...prevActivities, atividade]);
    reset();
  }

  const bannerFile = watch('Banner');

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow rounded-lg overflow-hidden"
        >
          {/* Todo o conteúdo do formulário */}
          <div className="p-6 sm:p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Crie uma atividade</h1>

            {/* Nome e Formato */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome da atividade*
                </label>
                <input
                  type="text"
                  {...register('Nome', { required: true })}
                  placeholder="Ex: Techweek"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.Nome && (
                  <p className="mt-1 text-sm text-red-600">O nome da atividade é obrigatório.</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Formato*
                </label>
                <select
                  {...register('Formato', { required: true })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="presencial">Presencial</option>
                  <option value="online">Online</option>
                  <option value="híbrido">Híbrido</option>
                </select>
                {errors.Formato && (
                  <p className="mt-1 text-sm text-red-600">O formato é obrigatório.</p>
                )}
              </div>
            </div>

            {/* Local e Data/Hora */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Local*</label>
                <input
                  type="text"
                  {...register('Local', { required: true })}
                  placeholder="Ex: Auditório Principal"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.Local && (
                  <p className="mt-1 text-sm text-red-600">O local é obrigatório.</p>
                )}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Data*</label>
                  <input
                    type="date"
                    {...register('DataInicio', { required: true })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.DataInicio && (
                    <p className="mt-1 text-sm text-red-600">A data é obrigatória.</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Horário*</label>
                  <input
                    type="time"
                    {...register('HoraInicio', { required: true })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.HoraInicio && (
                    <p className="mt-1 text-sm text-red-600">O horário é obrigatório.</p>
                  )}
                </div>
              </div>
            </div>

            {/* Descrição e Upload */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Descrição*
                </label>
                <textarea
                  {...register('Descricao', { required: true })}
                  placeholder="Digite aqui a descrição detalhada da atividade..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 min-h-[150px]"
                  rows={4}
                />
                {errors.Descricao && (
                  <p className="mt-1 text-sm text-red-600">A descrição é obrigatória.</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Banner (opcional)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                      >
                        <span>Upload de arquivo</span>
                        <input
                          id="file-upload"
                          type="file"
                          className="sr-only"
                          {...register('Banner')}
                          accept="image/*"
                        />
                      </label>
                      <p className="pl-1">ou arraste e solte</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF até 5MB
                    </p>
                    {bannerFile?.[0] && (
                      <div className="mt-2 text-sm text-gray-900">
                        Arquivo selecionado: {bannerFile[0].name}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Campos adicionais */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tags (opcional)
                </label>
                <input
                  type="text"
                  {...register('Tags')}
                  placeholder="Ex: tecnologia, inovação, workshop"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Separe as tags por vírgula
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Capacidade Máxima
                </label>
                <input
                  type="number"
                  {...register('CapacidadeMaxima')}
                  placeholder="Ex: 100"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Horas Complementares
                </label>
                <input
                  type="number"
                  {...register('HorasComplementares')}
                  placeholder="Ex: 4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="documento-user"
                  type="checkbox"
                  {...register('DocumentoDoUser')}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="documento-user" className="ml-2 block text-sm text-gray-700">
                  Solicitar documento do usuário
                </label>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Criar Atividade
            </button>
          </div>
        </form>

        {activitiesList.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Atividades Criadas</h2>
            <div className="grid grid-cols-1 gap-6">
              {activitiesList.map((atividade, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">{atividade.Nome}</h3>
                  <p className="text-gray-700 mb-2">{atividade.Descricao}</p>
                  <p className="text-gray-600">
                    <strong>Local:</strong> {atividade.Local}
                  </p>
                  <p className="text-gray-600">
                    <strong>Formato:</strong> {atividade.Formato}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
