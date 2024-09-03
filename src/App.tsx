import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Cadastro from "./pages/cadastro/Cadastro";
import Login from "./pages/login/Login";
import { AuthProvider } from "./contexts/AuthContext";
import ListaTemas from "./components/temas/listatemas/ListaTemas";
import FormTema from "./components/temas/formulariotema/FormTema";
import DeletarTema from "./components/temas/deletartema/Deletar";
import ListaPostagens from "./components/postagem/listapostagens/ListaPostagens";
import FormularioPostagem from "./components/postagem/formulariopostagem/FormularioPostagem";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Perfil from "./pages/perfil/Perfil";
import DeletarPostagem from "./components/postagem/deletarpostagem/DeletarPostagem";

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[85vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormTema />} />
              <Route path="/editarTema/:id" element={<FormTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route
                path="/cadastroPostagem"
                element={<FormularioPostagem />}
              />
              <Route
                path="/editarPostagem/:id"
                element={<FormularioPostagem />}
              />
              <Route
                path="/deletarPostagem/:id"
                element={<DeletarPostagem />}
              />
              <Route
                path="/perfil"
                element={<Perfil />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
