import './Header.css';

import React from 'react'

export const Header = ({black}) => {
    return (
        <header className={black ? 'header-black' : ''}>
            <div className="header-logo">
                <a href="/">
                    <img src="../images/logoNetflix.gif" alt="Logo da Netflix"></img>
                </a>
            </div>
            <div className="header-user">
                <img src="../images/userPerfil.png" alt="Imagem de perfil do usuário"></img>
            </div>
        </header>
    )
}
