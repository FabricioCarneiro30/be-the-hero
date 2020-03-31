import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesIMG from '../../assets/heroes.png';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />
            </section>

            <form>
                <h1>Faça seu Logon</h1>

                <input type="text" placeholder="Sua ID" />
                <button className="button" type="submit">Entrar</button>

                <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="#E02041" />
                    Não Tenho Cadastro
                </Link>
            </form>

            <img src={heroesIMG} alt="heroes" />
        </div>
    );
}