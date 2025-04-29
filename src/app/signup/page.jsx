"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import imgCadastro from "../public/images/img_cadastro.png";
import logo from "../public/images/logo_ifsp.png";
import passwordShow from "../public/icons/passwordShow.ico";
import passwordHide from "../public/icons/passwordHide.ico";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./signup.module.css";

const schema = z
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

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const { nome, email, senha } = data;
      console.log("Dados enviados para o cadastro:", {
        name: nome,
        email,
        password: senha,
      });

      const response = await axios.post(
        "{BACKEND_URL}/users",
        {
          name: data.nome,
          email: data.email,
          password: data.senha,
          userRole: "PARTICIPANT",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 200) {
        const errorData = response.data;
        throw new Error(errorData.message || "Erro no cadastro");
      }

      toast.success("Cadastro realizado com sucesso!", { autoClose: 1500 });
      setTimeout(() => {
        router.push("/home");
      }, 1600);
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message || "Erro ao conectar. Tente mais tarde.", {
          autoClose: 3000,
        });
      } else {
        toast.error("Erro desconhecido. Tente novamente.", {
          autoClose: 3000,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
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
            <div>
              <label className={styles.label}>Nome Completo</label>
              <input
                className={styles.input}
                type="text"
                placeholder="Digite seu nome completo"
                {...register("nome", { required: "Nome é obrigatório" })}
              />
              {errors.nome && (
                <p className={styles.errorMessage}>{errors.nome.message}</p>
              )}
            </div>

            <div>
              <label className={styles.label}>Email</label>
              <input
                className={styles.input}
                type="email"
                placeholder="Digite seu e-mail"
                {...register("email", { required: "E-mail é obrigatório" })}
              />
              {errors.email && (
                <p className={styles.errorMessage}>{errors.email.message}</p>
              )}
            </div>

            <div className={styles.passwordContainer}>
              <label className={styles.label}>Senha</label>
              <input
                className={styles.input}
                type={showPassword ? "text" : "password"}
                placeholder="Digite uma senha"
                {...register("senha", { required: "Senha é obrigatória" })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={styles.togglePasswordBtn}
              >
                <Image
                  src={showPassword ? passwordHide : passwordShow}
                  alt={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  width={20}
                />
              </button>
            </div>
            {errors.senha && (
              <p className={styles.errorMessage}>{errors.senha.message}</p>
            )}

            <div className={styles.passwordContainer}>
              <label className={styles.label}>Confirmar Senha</label>
              <input
                className={styles.input}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Digite sua senha novamente"
                {...register("confirmarSenha", {
                  required: "Confirmar senha é obrigatório",
                  validate: (value) =>
                    value === getValues("senha") || "As senhas não coincidem",
                })}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className={styles.togglePasswordBtn}
              >
                <Image
                  src={showConfirmPassword ? passwordHide : passwordShow}
                  alt={showConfirmPassword ? "Ocultar senha" : "Mostrar senha"}
                  width={20}
                />
              </button>
            </div>
            {errors.confirmarSenha && (
              <p className={styles.errorMessage}>
                {errors.confirmarSenha.message}
              </p>
            )}

            <p className={styles.formParagraph}>
              Já possui uma conta?{" "}
              <Link href="/login" className={styles.loginLink}>
                Faça login
              </Link>
            </p>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Cadastrar"}
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
