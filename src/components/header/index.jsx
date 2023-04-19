import React from "react";
import logo from './assets/logo.svg'
import './style.css'

const Header = () =>
        <div className="header">
            <div className="container">
                <div className="imagem">
                    <img src={logo} alt="logo" />
                </div>

                <div className="links">
                    <ul>
                        <li className="premium-link"><a href="https://www.meusite.com/pagina">Premium</a></li>
                    </ul>
                </div>
            </div>   
        </div>

export default Header;