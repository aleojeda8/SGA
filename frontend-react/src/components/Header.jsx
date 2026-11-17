import { Link } from "react-router-dom";
import SelectorTema from "./SelectorTema";
import { useNavigate } from "react-router-dom"
import {useAuth } from "../context/useAuth";
export default function Header() {
    const { cerrarSesion } = useAuth();
    const navigate = useNavigate();
    
    const logout = () => {
        cerrarSesion();
        navigate("/login");
    }
    return (
        <header className="app-header">
            <Link to="/" className="header-brand" aria-label="SGA, inicio">
                <img src="/sga-logo.png" alt="" />
                <span className="header-brand-copy">
                    <span className="header-brand-name">SGA</span>
                    <span className="header-brand-caption">Sistema de Gestión Académica</span>
                </span>
            </Link>
            <nav className="app-nav" aria-label="Navegación principal">
                <Link to="/">Inicio</Link>
                <Link to="/alumnos">Alumnos</Link>
                <Link to="/docentes">Docentes</Link>
                <Link to="/materias">Materias</Link>
                <Link to="/ayuda" className="nav-help" aria-label="Ayuda">❔</Link>
                <button type="button" color="inherit" variant="outlined" onClick={logout}>Cerrar Sesion</button>
                <SelectorTema />
            </nav>
        </header>
    )
}