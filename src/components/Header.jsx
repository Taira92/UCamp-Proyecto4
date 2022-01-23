
import { Link } from "react-router-dom"

import React from 'react'

export const Header = () => {
    return (            
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">                
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul id="header-ul" className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/">Inicio</Link>
                        </li>                 
                        <li className="nav-item">
                            <Link to="/pages/Nosotros">Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pages/Menu">Menu</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pages/Reservaciones">Reservaciones</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

