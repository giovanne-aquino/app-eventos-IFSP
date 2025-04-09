export type FormatoAtividade = "presencial" | "online" | "hibrido";
export type TipoAtividade = "palestra" | "minicurso" | "oficina" | "workshop";

export interface Atividade {
    nome: string;
    organizadorDoEvento: number;
    descricao: string;
    formato: FormatoAtividade;
    local: string;
    documentoUsuario: boolean;
    bannerUrl?: string;
    tags: string[];
    tipo: TipoAtividade;
    capacidadeMax: number;
    horasComplementares: number;
    idEvento: number;
}