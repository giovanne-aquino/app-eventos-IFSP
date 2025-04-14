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
import { Checkbox } from "@radix-ui/react-checkbox";
import GreenLine from "@/components/utils/greenLine";

export default function CriarEvento() {
  // Valores default do Formulário de Eventos
  const [eventForm, setEventForm] = useState({
    type: "big",
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
  const [eventUserDocCheck, setEventUserDocCheck] = useState(false)

  // Verificando se podemos enviar o Form de Eventos
  const [isEventFormValid, setIsEventFormValid] = useState(false);

  useEffect(() => {
    const isValid = eventForm.name !== "";
    setIsEventFormValid(isValid);
  }, [eventForm]);

  // Capturando valores dos inputs do EventForm
  const handleChangeEventForm = (field, value) => {
    setEventForm((prevForm) => {
      const updatedEventForm = { ...prevForm, [field]: value}
      
      const { uf, city, street, number, cep } = updatedEventForm;
      updatedEventForm.location = `${street}, ${number} - ${city} - ${uf} - CEP: ${cep}`;

      return updatedEventForm;
    });
    console.log(eventForm);
  };

  return (
    <div>
      <div id="banner">
        <h1>Crie seu Evento!</h1>
      </div>
      <section className="flex flex-col items-center justify-center">
        <div className="w-[90%] max-w-[1600px]">
          <GreenLine />

          <h2>Informações do Evento</h2>
          <div className="w-full max-w-[1664px] bg-FI_form_bg p-16 border-FI_neutral_30 border-[1px] rounded-[10px]">
            <form className="flex flex-col gap-8">
              <div className="w-full flex justify-between items-center">
                <RadioGroup
                  id="eventType"
                  defaultValue="big"
                  className="flex flex-col justify-between items-center gap-10 sm:flex-row"
                  onValueChange={(value) =>
                    handleChangeEventForm("type", value)
                  }
                >
                  <RadioGroupItem value="big" label="Evento Grande" />
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
                  onChange={(e) =>
                    handleChangeEventForm("name", e.target.value)
                  }
                  width="w-full"
                />
                <Select
                  onValueChange={(value) =>
                    handleChangeEventForm("status", value)
                  }
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
                {eventForm.type === "big" ? (
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
                  onValueChange={(value) =>
                    handleChangeEventForm("format", value)
                  }
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
              {(eventForm.format === "locally" || eventForm.format === "hybrid") && (
                <div id="location" className="w-full flex flex-col justify-between items-center gap-10 md:flex-row">
                  <Select onValueChange={(value) => handleChangeEventForm("uf", value)}>
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
                        "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO",
                        "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI",
                        "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
                      ].map((uf) => (
                        <SelectItem key={uf} value={uf}>
                          {uf}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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
                  <Input
                    id="street"
                    type="text"
                    placeholder="Rua Maria Cristina"
                    label="Rua:"
                    value={eventForm.street}
                    onChange={(e) => handleChangeEventForm("street", e.target.value)}
                    className="bg-FI_neutral_0 border-FI_input_stroke"
                    width="w-full"
                  />
                  <Input
                    id="number"
                    type="number"
                    placeholder="123"
                    label="Número:"
                    value={eventForm.number}
                    onChange={(e) => handleChangeEventForm("number", e.target.value)}
                    className="bg-FI_neutral_0 border-FI_input_stroke"
                    width="w-full md:w-1/2"
                  />
                  <Input
                    id="cep"
                    type="number"
                    placeholder="00000-000"
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
                    {(eventForm.format === "locally" || eventForm.format === "hybrid") && (
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
                    {eventUserDocCheck ===  true && (
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
                  onChange={(e) => handleChangeEventForm("description", e.target.value)}
                  className="bg-FI_neutral_0 border-FI_input_stroke h-64 resize-none"
                  width="w-full"
                />
                <BannerUpload id="banner-upload" name="banner" />
              </div>
              {eventForm.type === "simple" && (
                <div>
                  <AddInput id="fields" label="Campo Extra:" placeholder="Idade, Curso, Gênero, Etc." label2="Campos Extras:" value={eventForm.fields}  onChange={(value) => handleChangeEventForm("fields", value)}/>
                </div>
              )}
              <div>
                <AddInput id="tags" label="Adicionar Tags:" placeholder="Tecnologia, Inteligência Artificial, Etc" label2="Tags:" value={eventForm.eventTags}  onChange={(value) => handleChangeEventForm("eventTags", value)}/>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
