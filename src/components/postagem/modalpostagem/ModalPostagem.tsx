import Popup from "reactjs-popup";
import FormularioPostagem from "../formulariopostagem/FormularioPostagem";

import "./modalPostagem.css";

function ModalPostagem() {
  return (
    <>
      <Popup
        trigger={
          <button className="
          rounded
          border-white
          border-solid
          border-2
          py-2
          px-4
          hover:bg-white
          hover:text-indigo-800
          transition-colors
          duration-300
          ">
            Nova postagem
          </button>
        }
        modal
      >
        <div>
          <FormularioPostagem />
        </div>
      </Popup>
    </>
  );
}

export default ModalPostagem;
