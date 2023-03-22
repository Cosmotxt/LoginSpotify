import React from "react";
import './style.css';

const Input = () =>
    <div className="inputs">
        <div className="ou">
            <div className="line"></div>
            <p>ou</p>
            <div className="line"></div>
        </div>

        <form>
            
            <div className="formulario">
                <label>Endereço de e-mail ou nome de usuário
                    <input className="input" type="email" placeholder="Endereço de e-mail ou nome de usuário" required/>
                </label>

                <label>Senha
                    <input className="input" type="password" placeholder="Senha" required/>
                    <a href="https://accounts.spotify.com/pt-BR/password-reset?flow_id=b52aa718-874c-4de5-9ac5-e36b8fe8f909%3A1679335358" id="forgot-password">Esqueceu sua senha?</a>
                </label>

                <div id="btns">
                    <div className="checkbox">
                        <input id="check" type="checkbox" />
                        <label>Lembrar de mim</label>
                    </div>

                    <div id="submit">
                        <input type="submit" value="Entrar"/>
                    </div>
                </div>

            </div>
       
        </form>
    </div>


export default Input;