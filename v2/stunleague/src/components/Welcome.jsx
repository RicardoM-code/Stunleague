import { useState } from "react";
import { CiMedal, CiPlay1, CiShoppingCart } from "react-icons/ci";
import Hero from '../img/Hero.png';
import imgWelcome from '../img/imgWelcome.png';
import Header from "./Header";


import '../styles/components/Welcome.sass';

function Welcome() {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () =>{
        setIsOpen(false)
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
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                        <p className="modalLogin">Login</p>
                        <div className="modalContent">
                            <div className="modalInputs">
                                <div className="inputEmail">
                                    <p className="emailTxt">E-mail ou nome do usuário</p>
                                    <input className="emailInput" type="text" placeholder="Digite aqui" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default Welcome
