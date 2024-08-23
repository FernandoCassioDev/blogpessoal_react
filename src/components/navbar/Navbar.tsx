import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="
    bg-indigo-900
    text-white
    ">
      <div className="
    container
    flex
    justify-between
    ">

        <h2 className="
        text-3xl
        font-bold
        pl-16
        ">
          <Link to='/home'>BLOG PESSOAL</Link>
        </h2>
        
          <ul className="flex flex-row">
            <li>
              <a href="">Postagens</a>
            </li>
            <li className="pl-5">
              <a href="">Temas</a>
            </li>
            <li className="pl-5">
              <a href="">Cadastrar Tema</a>
            </li>
            <li className="pl-5">
              <a href="">Perfil</a>
            </li>
            <li className="pl-5">
              <a href="">Sair</a>
            </li>
          </ul>
      </div>
    </nav>
  )
}

export default Navbar