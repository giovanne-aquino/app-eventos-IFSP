"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import imgCadastro from "../public/images/img_cadastro.png";
import logo from "../public/images/logo_ifsp.png";
import styles from "./signup.module.css";

const schema = z
  .object({
    nome: z
      .string()
      .min(8, "O nome deve ter no mínimo 8 caracteres")
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

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Dados cadastrados:", data);
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.topText}>
          Crie aqui sua conta e<br />
          comece a se inscrever
          <br />
          nos nossos melhores eventos!
        </div>
        <div className={styles.centerIcon}>
          <Image
            className={styles.imgCadastro}
            src={imgCadastro}
            alt="Imagem de cadastro"
          />
        </div>
        <Image className={styles.logoIcon} src={logo} alt="Logo" />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.formContainer}>
          <h2 className={styles.formText}>Criar uma conta</h2>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.formSignup}>
            <input
              className={styles.input}
              type="text"
              placeholder="Digite seu nome completo"
              {...register("nome", { required: "Nome é obrigatório" })}
            />
            {errors.nome && (
              <p className={styles.errorMessage}>{errors.nome.message}</p>
            )}

            <input
              className={styles.input}
              type="email"
              placeholder="Digite seu e-mail"
              {...register("email", { required: "E-mail é obrigatório" })}
            />
            {errors.email && (
              <p className={styles.errorMessage}>{errors.email.message}</p>
            )}

            <input
              className={styles.input}
              type="password"
              placeholder="Digite uma senha"
              {...register("senha", { required: "Senha é obrigatória" })}
            />
            {errors.senha && (
              <p className={styles.errorMessage}>{errors.senha.message}</p>
            )}

            <input
              className={styles.input}
              type="password"
              placeholder="Digite sua senha novamente"
              {...register("confirmarSenha", {
                required: "Confirmar senha é obrigatório",
                validate: (value) =>
                  value === getValues("senha") || "As senhas não coincidem",
              })}
            />
            {errors.confirmarSenha && (
              <p className={styles.errorMessage}>
                {errors.confirmarSenha.message}
              </p>
            )}

            <p className={styles.formParagraph}>
              Já possui uma conta?{" "}
              <a href="/login" className={styles.loginLink}>
                Faça login
              </a>
            </p>

            <button type="submit" className={styles.submitBtn}>
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
