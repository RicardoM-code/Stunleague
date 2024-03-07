import { CiMedal, CiPlay1, CiShoppingCart } from "react-icons/ci";
import Hero from '../img/Hero.png';
import imgWelcome from '../img/imgWelcome.png';
import Header from "./Header";


import '../styles/components/Welcome.sass';

function Welcome() {
  return (
    <div>
        <Header/>
        
            <div className='container' style={{backgroundImage: `url(${Hero})`}}>
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
                    <button className='play'>
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
    </div>
    
  )
}

export default Welcome