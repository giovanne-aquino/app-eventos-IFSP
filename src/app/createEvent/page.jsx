"use client";

import { useState, useEffect } from "react";

import EventForm from "./eventForm";

import GreenLine from "@/components/utils/greenLine";

import Image from "next/image";
import banner from "../../assets/bannerCreateEvent.png";

export default function CriarEvento() {
  // Trocar entre Formulário Eventos e Formulário Atividades
  let [toggleForm, setToggleForm] = useState(true);

  // Obtendo dados do envio do evento.
  const handleSubmitEvent = (formData) => {
    console.log("Page:");
    console.log(formData);
  };

  return (
    <div>
      <div id="banner" className="relative h-[70vh]">
        <h1 className="text-6xl text-center text-FI_neutral_0 font-bold z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Crie seu Evento!
        </h1>
        <Image
          src={banner}
          alt="banner de evento"
          className="absolute w-full h-full"
        />
      </div>
      <section className="flex flex-col items-center justify-center">
        <div className="w-[90%] max-w-[1600px] my-32 flex flex-col gap-16">
          <GreenLine />
          <div>
            {/* Título do Formulário depende do ToggleForm para ser Evento ou Atividade. */}
            {toggleForm === true ? (
              <h2 className="text-3xl text-FI_neutral-0 font-bold mb-8">
                Informações do Evento
              </h2>
            ) : (
              <h2 className="text-3xl text-FI_neutral-0 font-bold mb-8">
                Informações da Atividade
              </h2>
            )}

            {/* Formulário Inicia com o de Eventos. */}
            {toggleForm ? (
              <EventForm
                toggleForm={() => setToggleForm(!toggleForm)}
                submitForm={handleSubmitEvent}
              />
            ) : (
              // Formulário de Atividades AQUI!
              <>
                <input
                  type="button"
                  onClick={() => setToggleForm(!toggleForm)}
                  value="Voltar para Evento"
                  className="mt-6 w-full bg-FI_neutral_60 hover:bg-FI_input_label text-white font-semibold py-2 rounded-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
                />
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
