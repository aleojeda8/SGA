import { Link } from "react-router-dom";
import SelectorTema from "./SelectorTema";

export default function Header() {
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
                <Link to="/ayuda" className="nav-help" aria-label="Ayuda">❔</Link>
                <SelectorTema />
            </nav>
        </header>
    )
}