import { z } from 'zod';

export const userRegisterSchema = z
  .object({
    nome: z
      .string()
      .min(3, "O nome deve ter no mínimo 3 caracteres")
      .max(200, "O nome deve ter no máximo 200 caracteres"),
    email: z.string().email("E-mail inválido"),
    senha: z
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .regex(
        /(?=.*[!@#$%^&*(),.?":{}|<>])/,
        "A senha deve conter pelo menos um caractere especial"
      )
      .regex(/(?=.*[0-9])/, "A senha deve conter pelo menos um número"),
    confirmarSenha: z.string(),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    path: ["confirmarSenha"],
    message: "As senhas não coincidem",
  });