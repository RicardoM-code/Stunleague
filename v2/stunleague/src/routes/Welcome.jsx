import { useState } from "react";
import { CiMedal, CiPlay1, CiShoppingCart } from "react-icons/ci";
import { IoMdClose, IoIosArrowForward } from "react-icons/io";
import Hero from '../img/Hero.png';
import imgWelcome from '../img/imgWelcome.png';
import Header from "../components/Header";
import Google from '../img/Google.png'
import Discord from '../img/Discord.png'
import RegisterForm from "../components/RegisterForm";


import '../styles/components/Welcome.sass';

function Welcome() {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState("login");

    const openModal = () => {
        setIsOpen(true);
        setContent("login");
    }

    const closeModal = () =>{
        setIsOpen(false);
    }

    const handleRegisterClick = () => {
        setContent("register");
    }

    const handleBackClick = () => {
        setContent("login");
    }

    return (
        <div>
            <Header/>
            
            <div className={`container ${isOpen ? 'modal-open' : ''}`} style={{backgroundImage: `url(${Hero})`}}>
                <div>
                    <img className='imgWelcome' src={imgWelcome}/>
                </div>
                <div>
                    <p className='txt1'>Dê um play agora em sua competição!</p>
                </div>
                <div>
                    <p className='txt2'>Aproveite seu jogo, nós cuidaremos do resto</p>
                </div>
                <div>
                    <button className='play' onClick={openModal}>
                        <CiPlay1 className="playIcon" />
                        <p className='playTxt'>Jogar agora</p>
                    </button>
                    <button className="conhecerLoja">
                        <CiShoppingCart className="clIcon" />
                        <p className="clTxt">Conhecer Loja</p>
                    </button>
                    <button className="stunRank">
                        <CiMedal className="srIcon" />
                        <p className="srTxt">Stun ranking</p>
                    </button>
                </div>
            </div>
            
            {isOpen && (
                <div className="modalContainer">
                    <div className="modal">
                        <div>
                            <div className="containerClose">
                                <IoMdClose className="close" onClick={closeModal} />
                            </div>
                            <p className="modalLogin">{content === "login" ? "Login" : "Cadastro"}</p>
                            <div className="modalContent">
                                {content === "login" ? (
                                    <div>
                                        <div className="modalInputs">
                                            <div className="inputEmail">
                                                <p className="emailTxt">E-mail ou nome do usuário</p>
                                                <input className="emailInput" type="text" placeholder="Digite aqui" />
                                            </div>
                                            <div className="inputPassword">
                                                <p className="passTxt">Senha</p>
                                                <input className="passInput" type="text" placeholder="Digite aqui" />
                                            </div>
                                        </div>
                                        <div className="use">
                                            <div className="useTxt">
                                                <p>Utilizar</p>
                                            </div>
                                            <div className="useIcons">
                                                <img className="googleIcon" src={Google} alt="Google Logo" />
                                                <img className="discordIcon" src={Discord} alt="Discord Logo" />
                                            </div>
                                        </div>
                                        <div className="buttons">
                                            <button className="registerBtn" onClick={handleRegisterClick}>
                                                <span className="registerBtnContent">
                                                    Cadastre-se
                                                </span>
                                            </button>
                                            <button className="enterBtn">
                                                <span className="enterBtnContent">
                                                    Entrar
                                                </span>
                                                <span className="enterBtnIcon">
                                                    <IoIosArrowForward />
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <RegisterForm onBackClick={handleBackClick} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Welcome;
