"use client";

import { useState, useEffect } from "react";

import { Input } from "@/components/ui/input";
import { AddInput } from "@/components/ui/addInput";
import { Textarea } from "@/components/ui/textarea";
import { BannerUpload } from "@/components/ui/bannerUploud";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { PlusCircle } from "lucide-react";

export default function EventForm({ toggleForm, submitForm }) {
  // Função para mudar o formulário
  const handleToggleForm = () => {
    toggleForm();
  };

  // Valores default do Formulário de Eventos
  const [eventForm, setEventForm] = useState({
    type: "LARGE",
    name: "",
    status: "",
    startDate: "",
    endDate: "",
    format: "",
    location: "",
    description: "",
    banner: "",
    maxCapacity: "",
    complementaryHours: "",
    fields: [],
    eventTags: [],
    userDocument: "",
    organizerId: "",
    userOrganizer: "",
  });
  const [eventUserDocCheck, setEventUserDocCheck] = useState(false);

  // Verificando se podemos enviar o Form de Eventos
  const [isEventFormValid, setIsEventFormValid] = useState(false);

  useEffect(() => {
    const isValid = eventForm.name !== "";
    setIsEventFormValid(isValid);
  }, [eventForm]);

  // Capturando valores dos inputs do EventForm
  const handleChangeEventForm = (field, value) => {
    setEventForm((prevForm) => {
      const updatedEventForm = { ...prevForm, [field]: value };

      const { street, number, neighborhood, city, uf, cep } = updatedEventForm;
      updatedEventForm.location = `${street}, ${number} - ${neighborhood}, ${city} - ${uf} - CEP: ${cep}`;

      return updatedEventForm;
    });
  };

  // Envio do Formulário
  const handleSubmitForm = () => {
    // Só pode adicionar se o IsEventFormValid

    // Chamada da API para criar Evento

    // Retorna os dados do evento para a pagina pai.
    console.log(eventForm);
    submitForm(eventForm);
  };

  return (
    <div>
      <div className="w-full max-w-[1664px] bg-FI_form_bg px-16 py-8 mb-8 border-FI_neutral_30 border rounded-md">
        <form id="Event" className="flex flex-col gap-8">
          <div className="w-full flex justify-between items-center">
            <RadioGroup
              id="eventType"
              defaultValue="LARGE"
              className="flex flex-col justify-between items-center gap-10 sm:flex-row"
              onValueChange={(value) => handleChangeEventForm("type", value)}
            >
              <RadioGroupItem value="LARGE" label="Evento Grande" />
              <RadioGroupItem value="simple" label="Evento Simples" />
            </RadioGroup>
          </div>
          <div className="w-full flex flex-col justify-between items-center gap-10 md:flex-row">
            <Input
              id="eventName"
              type="text"
              placeholder="Digite seu nome completo"
              label="Nome do Evento:"
              className="bg-FI_neutral_0 border-FI_input_stroke"
              onChange={(e) => handleChangeEventForm("name", e.target.value)}
              width="w-full"
            />
            <Select
              onValueChange={(value) => handleChangeEventForm("status", value)}
            >
              <SelectTrigger
                id="eventStatus"
                label="Status do Evento:"
                className="bg-FI_neutral_0 border-FI_input_stroke"
                width="w-full"
              >
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Disponível</SelectItem>
                <SelectItem value="sketch">Rascunho</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full flex flex-col justify-between items-center gap-10 md:flex-row">
            {eventForm.type === "LARGE" ? (
              <div className="w-full flex flex-col justify-between items-center gap-10 md:flex-row">
                <Input
                  id="eventStartDate"
                  type="datetime-local"
                  placeholder="DD/MM/AAAA, 00:00"
                  label="Data Início:"
                  className="bg-FI_neutral_0 border-FI_input_stroke"
                  onChange={(e) =>
                    handleChangeEventForm("startDate", e.target.value)
                  }
                  width="w-full"
                />
                <Input
                  id="eventEndDate"
                  type="datetime-local"
                  placeholder="DD/MM/AAAA, 00:00"
                  label="Data Fim:"
                  className="bg-FI_neutral_0 border-FI_input_stroke"
                  onChange={(e) =>
                    handleChangeEventForm("endDate", e.target.value)
                  }
                  width="w-full"
                />
              </div>
            ) : (
              <Input
                id="eventStartDate"
                type="datetime-local"
                placeholder="DD/MM/AAAA, 00:00"
                label="Data Início:"
                className="bg-FI_neutral_0 border-FI_input_stroke"
                onChange={(e) =>
                  handleChangeEventForm("startDate", e.target.value)
                }
                width="w-full"
              />
            )}
            <Select
              onValueChange={(value) => handleChangeEventForm("format", value)}
            >
              <SelectTrigger
                id="eventFormat"
                label="Formato:"
                className="bg-FI_neutral_0 border-FI_input_stroke"
                width="w-full"
              >
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="locally">Presencial</SelectItem>
                <SelectItem value="hybrid">Híbrido</SelectItem>
                <SelectItem value="online">Online</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {(eventForm.format === "locally" ||
            eventForm.format === "hybrid") && (
            <div
              id="location"
              className="w-full flex flex-col justify-between items-center gap-10 md:flex-row"
            >
              <Input
                id="street"
                type="text"
                placeholder="Rua Maria Cristina"
                label="Rua:"
                value={eventForm.street}
                onChange={(e) =>
                  handleChangeEventForm("street", e.target.value)
                }
                className="bg-FI_neutral_0 border-FI_input_stroke"
                width="w-full"
              />
              <Input
                id="number"
                type="number"
                placeholder="50"
                maskOptions="000000"
                label="Número:"
                value={eventForm.number}
                onChange={(e) =>
                  handleChangeEventForm("number", e.target.value)
                }
                className="bg-FI_neutral_0 border-FI_input_stroke"
                width="w-full md:w-1/2"
              />
              <Input
                id="neighborhood"
                type="text"
                placeholder="Jardim Casqueiro"
                label="Bairro:"
                value={eventForm.neighborhood}
                onChange={(e) =>
                  handleChangeEventForm("street", e.target.value)
                }
                className="bg-FI_neutral_0 border-FI_input_stroke"
                width="w-full"
              />
              <Input
                id="city"
                type="text"
                placeholder="Cubatão"
                label="Cidade:"
                value={eventForm.city}
                onChange={(e) => handleChangeEventForm("city", e.target.value)}
                className="bg-FI_neutral_0 border-FI_input_stroke"
                width="w-full"
              />
              <Select
                onValueChange={(value) => handleChangeEventForm("uf", value)}
              >
                <SelectTrigger
                  id="uf"
                  label="Estado:"
                  className="bg-FI_neutral_0 border-FI_input_stroke"
                  width="w-full md:w-1/2"
                >
                  <SelectValue placeholder="UF" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "AC",
                    "AL",
                    "AP",
                    "AM",
                    "BA",
                    "CE",
                    "DF",
                    "ES",
                    "GO",
                    "MA",
                    "MT",
                    "MS",
                    "MG",
                    "PA",
                    "PB",
                    "PR",
                    "PE",
                    "PI",
                    "RJ",
                    "RN",
                    "RS",
                    "RO",
                    "RR",
                    "SC",
                    "SP",
                    "SE",
                    "TO",
                  ].map((uf) => (
                    <SelectItem key={uf} value={uf}>
                      {uf}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                id="cep"
                type="text"
                placeholder="00000-000"
                maskOptions="00000-000"
                label="CEP:"
                value={eventForm.cep}
                onChange={(e) => handleChangeEventForm("cep", e.target.value)}
                className="bg-FI_neutral_0 border-FI_input_stroke"
                width="w-full md:w-1/2"
              />
            </div>
          )}
          {eventForm.type === "simple" && (
            <>
              <div className="w-full flex flex-col justify-between items-center gap-10 sm:flex-row">
                {(eventForm.format === "locally" ||
                  eventForm.format === "hybrid") && (
                  <Input
                    id="eventMaxCapacity"
                    type="number"
                    placeholder="100 pessoas"
                    label="Capacidade Máxima:"
                    className="bg-FI_neutral_0 border-FI_input_stroke"
                    width="w-full"
                    onChange={(e) =>
                      handleChangeEventForm("maxCapacity", e.target.value)
                    }
                  />
                )}
                <Input
                  id="eventHours"
                  type="number"
                  placeholder="8"
                  label="Horas Complementares:"
                  className="bg-FI_neutral_0 border-FI_input_stroke"
                  width="w-full"
                  onChange={(e) =>
                    handleChangeEventForm("complementaryHours", e.target.value)
                  }
                />
              </div>
              <div className="w-full flex flex-col justify-between items-center gap-10 sm:flex-row">
                {eventUserDocCheck === true && (
                  <Select
                    onValueChange={(value) =>
                      handleChangeEventForm("userDocument", value)
                    }
                  >
                    <SelectTrigger
                      id="eventUserDoc"
                      label="Documento:"
                      className="bg-FI_neutral_0 border-FI_input_stroke"
                      width="w-full"
                    >
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="CPF">CPF</SelectItem>
                      <SelectItem value="RG">RG</SelectItem>
                      <SelectItem value="Passaporte">Passaporte</SelectItem>
                    </SelectContent>
                  </Select>
                )}
                <div className="flex items-center justify-center gap-2">
                  <Input
                    id="eventUserDocCheck"
                    type="checkbox"
                    label="Documento"
                    width="w-full flex flex-row-reverse items-center gap-2"
                    checked={eventUserDocCheck}
                    onChange={(e) => setEventUserDocCheck(e.target.checked)}
                  />
                </div>
              </div>
            </>
          )}
          <div className="w-full flex flex-col justify-between items-center gap-10 sm:flex-row">
            <Textarea
              id="eventDescription"
              type="text"
              placeholder="Digite aqui informações relevantes."
              label="Descrição:"
              onChange={(e) =>
                handleChangeEventForm("description", e.target.value)
              }
              className="bg-FI_neutral_0 border-FI_input_stroke h-64 resize-none"
              width="w-full"
            />
            <BannerUpload id="banner-upload" name="banner" />
          </div>
          {eventForm.type === "simple" && (
            <div>
              <AddInput
                id="fields"
                label="Campo Extra:"
                placeholder="Idade, Curso, Gênero, Etc."
                label2="Campos Extras:"
                value={eventForm.fields}
                onChange={(value) => handleChangeEventForm("fields", value)}
              />
            </div>
          )}
          <div>
            <AddInput
              id="tags"
              label="Adicionar Tags:"
              placeholder="Tecnologia, Inteligência Artificial, Etc"
              label2="Tags:"
              value={eventForm.eventTags}
              onChange={(value) => handleChangeEventForm("eventTags", value)}
            />
          </div>

          {eventForm.type === "LARGE" && (
            <div>
              <div className="flex justify-center items-center gap-2 min-h-[60px] w-full rounded-md border px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-FI_neutral_0 border-FI_input_stroke h-64">
                <PlusCircle size={40} className="text-FI_neutral_60" />
                <p className="w-40 text-center text-FI_neutral_60">
                  Ainda não há atividades neste evento.
                </p>
              </div>
              <input
                type="button"
                onClick={handleToggleForm}
                value="Adicionar Atividades"
                className="mt-6 w-full bg-FI_neutral_60 hover:bg-FI_input_label text-white font-semibold py-2 rounded-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
              />
            </div>
          )}
        </form>
      </div>
      <input
        type="button"
        value="Criar Evento"
        onClick={handleSubmitForm}
        className="w-full bg-FI_green p-3 rounded-md text-white font-bold transition hover:bg-FI_green_dark cursor-pointer"
      />
    </div>
  );
}
