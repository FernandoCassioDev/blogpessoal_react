//import React from 'react'

import { useNavigate } from "react-router-dom";
import CardTemas from "../cardTemas/CardTemas";
import { useContext, useEffect, useState } from "react";
import Tema from "../../../models/Tema";
import AuthContext from "../../../contexts/AuthContext";
import { buscar } from "../../../service/Service";
import { DNA } from "react-loader-spinner";

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
      alert("Você precisa estar logado!");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarTemas();
  }, [temas.length]);

  return (
    <>
    {temas.length === 0 && (<DNA visible={true} height="200" width="200" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper mx-auto"/>)}
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {temas.map((tema) => (
              <CardTemas key={tema.id} tema={tema} />
            ))}
          </div>
        </div>
    </>
  );
}

export default ListaTemas;
