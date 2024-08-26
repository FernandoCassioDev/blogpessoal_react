import { Link } from "react-router-dom";

function Navbar() {
  return (
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
            <Link to='/login' className="hover:underline">Login</Link>
          </li>
          <li className="pl-5">
            <Link to='/home' className="hover:underline">Home</Link>
          </li>
          <li className="pl-5">
            <a href="" className="hover:underline">Postagens</a>
          </li>
          <li className="pl-5">
            <a href="" className="hover:underline">Temas</a>
          </li>
          <li className="pl-5">
            <a href="" className="hover:underline">Cadastrar Tema</a>
          </li>
          <li className="pl-5">
            <a href="" className="hover:underline">Perfil</a>
          </li>
          <li className="pl-5 mr-10">
            <a href="" className="hover:underline">Sair</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
