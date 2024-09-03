import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Usuario from "../../models/Usuario";
import "./Cadastro.css";
import { useNavigate } from "react-router-dom";
import { cadastrarUsuario } from "../../service/Service";
import { RotatingLines } from "react-loader-spinner";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Cadastro() {
  //Hook useNavigate para redirecionar rotas
  const navigate = useNavigate();

  //Estado que vai guardar os dados do meu usuario
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  //estado que vai aguardar a confirmação da senha
  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  //Estado que vai indicar quando a animação (loader) será carregada
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //useEffect para monitorar o Estado Usuário
  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usuario]);

  //Redireciona para o Componente Login (rota /login)
  function retornar() {
    navigate("/login");
  }

  //Função que atualiza as propriedades do estado usuário
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
        ToastAlerta("Cadastro realizado com sucesso", "sucesso");
      } catch (error) {
        ToastAlerta("Erro ao cadastrar o usuário!", "erro");
      }
    } else {
      ToastAlerta(
        "Dados inconsistentes! Verifique as informações do cadastro.",
        "info"
      );
      setUsuario({ ...usuario, senha: "" });
      setConfirmaSenha("");
    }

    setIsLoading(false);
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
        <div className="fundoCadastro hidden lg:block">
          <img
            src="https://raw.githubusercontent.com/LucasCapSilva/blog-pessoal-react-2023/cadastrar-postagem-logica/src/assets/login.jpg"
            alt="foto de agenda"
            className="max-h-screen w-[50vw]"
          />
        </div>
        <form
          className="flex justify-center items-center flex-col w-2/3 gap-3"
          onSubmit={cadastrarNovoUsuario}
        >
          <h2 className="text-slate-900 text-5xl">Cadastrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              value={usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              value={usuario.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              value={usuario.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              value={usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleConfirmarSenha(e)
              }
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex justify-around w-full gap-8">
            <button
              className="rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2"
              onClick={retornar}
            >
              Cancelar
            </button>
            <button className="flex py-2 w-1/2 rounded text-white bg-indigo-500 justify-center">
              {isLoading ? (
                <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                />
              ) : (
                <span>Cadastrar</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Cadastro;
