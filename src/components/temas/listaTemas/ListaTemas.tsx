//import React from 'react'

import { useNavigate } from "react-router-dom";
import CardTemas from "../cardtemas/CardTemas";
import { useContext, useEffect, useState } from "react";
import Tema from "../../../models/Tema";
import AuthContext from "../../../contexts/AuthContext";
import { buscar } from "../../../service/Service";
import { DNA } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListaTemas() {
  const navigate = useNavigate();

  const [temas, setTemas] = useState<Tema[]>([]);

  const { handleLogout, usuario } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarTemas() {
    try {
      await buscar("/temas", setTemas, { headers: { Authorization: token } });
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado!", "info");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarTemas();
  }, [temas.length]);

  return (
    <>
      {temas.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {temas.map((tema) => (
          <CardTemas key={tema.id} tema={tema} />
        ))}
      </div>
    </>
  );
}

export default ListaTemas;
