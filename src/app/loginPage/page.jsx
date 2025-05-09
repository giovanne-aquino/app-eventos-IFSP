"use client";

import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useRouter } from "next/navigation";
import cadeado from "../images/img_cadeado.png";
import ifsp_logo from "../images/ifsp_logo.png";
import passwordShow from "../images/icons/passwordShow.ico";
import passwordHide from "../images/icons/passwordHide.ico";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./login.module.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const { email, senha } = data;
      const response = await axios.post("http://localhost:3001/auth/login", {
        email: email,
        password: senha,
      });

      toast.success("Login realizado com sucesso!", { autoClose: 1500 });

      setTimeout(() => {
        router.push("/home");
      }, 1600);

      console.log("Login bem-sucedido:", response.data);
    } catch (error) {
        console.error("Erro no login:", error.response);
        const errorMessage =
          error.response?.data?.message ||
          "Falha no login. Verifique suas credenciais.";
        toast.error(errorMessage);
      }
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.formSignIn}>
            <h2 className={styles.loginTitle}>Login</h2>
            <div className={styles.inputGroup}>
              <label className={styles.label}>E-mail</label>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                className={styles.input}
                {...register("email", { required: "E-mail é obrigatório" })}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Senha</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Digite uma senha"
                className={styles.input}
                {...register("password", { required: "Senha é obrigatória" })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={styles.toggleButton}
              >
                <Image
                  src={showPassword ? passwordShow : passwordHide}
                  alt="Mostrar senha"
                  width={20}
                  height={20}
                />
              </button>
            </div>

            <p className={styles.registerText}>
              Não possui uma conta?{" "}
              <a className={styles.registerLink} href="#">
                Cadastro
              </a>
            </p>

            <button type="submit" className={styles.submitButton}>
              Login
            </button>
          </form>
        </div>

        <div className={styles.rightSide}>
          <div className="text-5xl font-semibold text-right mb-10">
            Faça seu login e visualize <br />
            os eventos que estão a <br />
            sua espera.
          </div>

          <div className="mb-4 mt-10">
            <Image src={cadeado} alt="Ilustração de cadeado" width={500} />
          </div>

          <div className="absolute bottom-4 right-4">
            <Image src={ifsp_logo} alt="Logo IFSP" width={200} />
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
