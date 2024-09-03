import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {
  const navigate = useNavigate();

  const { usuario ,handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    ToastAlerta("O usuário foi desconectado com sucesso!", "sucesso");
    navigate("/login");
  }

  let component: ReactNode

  if(usuario.token !== ""){
    component = (
      <div
      className="
      w-full
      justify-center
      py-4
    bg-indigo-900
    text-white
    "
    >
      <div
        className="
    flex
    justify-between
    "
      >
        <h2
          className="
        text-3xl
        font-bold
        pl-16
        uppercase
        "
        >
          <Link to="/home">Blog Pessoal</Link>
        </h2>

        <ul className="flex flex-row items-center">
          <li>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
          </li>
          <li className="pl-5">
            <Link to="/home" className="hover:underline">
              Home
            </Link>
          </li>
          <li className="pl-5">
            <Link to="/postagens" className="hover:underline">
              Postagens
            </Link>
          </li>
          <li className="pl-5">
            <a href="" className="hover:underline">
              <Link to="/temas">Temas</Link>
            </a>
          </li>
          <li className="pl-5">
            <a href="" className="hover:underline">
              <Link to="/cadastroTema">Cadastrar Tema</Link>
            </a>
          </li>
          <li className="pl-5">
            <a href="" className="hover:underline">
              <Link to="/perfil">Perfil</Link>
            </a>
          </li>
          <li className="pl-5 mr-10">
            <a href="" className="hover:underline">
              <Link to="" onClick={logout} className="hover:underline">
                Sair
              </Link>
            </a>
          </li>
        </ul>
      </div>
    </div>

    )
  }
  return (
    <>
    {component}
    </>
  );
}

export default Navbar;
