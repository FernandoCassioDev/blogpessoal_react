import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Cadastro from './pages/cadastro/Cadastro'
import Login from './pages/login/Login'
import { AuthProvider } from './contexts/AuthContext'
import ListaTemas from './components/temas/listaTemas/ListaTemas'

function App() {

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[85vh]'>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/temas" element={<ListaTemas />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
