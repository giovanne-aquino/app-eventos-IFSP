import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import imgCadastro from './assets/img_cadastro.png';
import logo from './assets/logo_ifsp.png';

const schema = z.object({
  nome: z.string()
    .min(8, "O nome deve ter no mínimo 8 caracteres")
    .max(200, "O nome deve ter no máximo 200 caracteres"),
  email: z.string().email("E-mail inválido"),
  senha: z.string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .regex(/(?=.*[!@#$%^&*(),.?":{}|<>])/, "A senha deve conter pelo menos um caractere especial")
    .regex(/(?=.*[0-9])/, "A senha deve conter pelo menos um número"),
  confirmarSenha: z.string()
}).refine((data) => data.senha === data.confirmarSenha, {
  path: ['confirmarSenha'],
  message: 'As senhas não coincidem',
});

export default function Cadastro() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data) => {
    console.log("Dados cadastrados:", data);
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div className="container">
        <div className="left-side">
        <div className="top-text">
            Crie aqui sua conta e<br />
            comece a se inscrever<br />
            nos nossos melhores eventos!
        </div>
        <img className="cadastro-icon" src={imgCadastro} alt="icon" />

        <div className="if-info">
        <img id="logo_ifsp" src={logo} alt="icon" />

        </div>
        </div>

      <div className="right-side">
        <div className="form-container">
          <h2>Criar uma conta</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Digite seu nome completo" {...register("nome")} />
            {errors.nome && <p className="error-message">{errors.nome.message}</p>}

            <input type="email" placeholder="Digite seu e-mail" {...register("email")} />
            {errors.email && <p className="error-message">{errors.email.message}</p>}

            <input type="password" placeholder="Digite uma senha" {...register("senha")} />
            {errors.senha && <p className="error-message">{errors.senha.message}</p>}

            <input type="password" placeholder="Digite sua senha novamente" {...register("confirmarSenha")} />
            {errors.confirmarSenha && <p className="error-message">{errors.confirmarSenha.message}</p>}

            <p style={{ fontSize: "13px", marginBottom: "10px" }}>
              Já possui uma conta? <a href="/(alterar-para-rota)">Login</a>
            </p>

            <button type="submit" className="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
