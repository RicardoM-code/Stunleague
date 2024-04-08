import LeftBar from "../components/LeftBar"
import { HiOutlineUsers } from "react-icons/hi"
import { GrUpdate } from "react-icons/gr"
import { FaCircle } from "react-icons/fa"
import { CiMap } from "react-icons/ci"
import { LuShieldCheck } from "react-icons/lu"

import Soldiers from '../img/Soldiers.png'

import '../styles/components/Match.sass'

function Match() {
  return (
    <div>
        <div className="container">
          <div className="leftBar">
            <LeftBar/>
          </div>
          <div className="content">
            <div className="containerMatch">
              <div className="enterQueue">
                <p className="titleQueue">Stun Match</p>
                <p className="subtitleQueue">Jogue uma partida 5V5!</p>
                <button className="btnQueue">Entrar na fila<GrUpdate className="btnIconQueue" /></button>
                <p className="queueInfo"><FaCircle className="queueIcon1" /> N na fila agora <HiOutlineUsers className="queueIcon2"/></p>
              </div>
              <div>
                <img src={Soldiers} />
              </div>
            </div>
            <div className="howWork">
              <p className="titleWork">Como funciona:</p>
              <div className="cardContainer">
                <div className='card'>
                    <p className='cardPass'><GrUpdate className="cardPassIcon"/> Passo 1</p>
                    <p className='cardTitle'>Entrar na fila</p>
                    <p className='cardBody'>
                      Dê um tapa no tédio e entre na fila. 
                      Nós encontraremos companheiros de equipe e adversários à 
                      altura para você.
                    </p>
                  </div>
                  <div className='card'>
                    <p className='cardPass'><CiMap className="cardPassIcon"/> Passo 2</p>
                    <p className='cardTitle'>Vetar mapas</p>
                    <p className='cardBody'>
                      10 jogadores reunidos? É hora de vetar! Escolha um dos 
                      7 mapas disponíveis que será o palco do embate.
                    </p>
                  </div>
                  <div className='card'>
                    <p className='cardPass'><LuShieldCheck className="cardPassIcon"/> Passo 3</p>
                    <p className='cardTitle'>Anti-cheater</p>
                    <p className='cardBody'>
                      Em seguida, ative o anti-cheater e sincronize com o 
                      Cross Fire para garantir uma partida justa. 
                    </p>
                  </div>
              </div>
              <div className="requirements">
                <p className="reqTitle">Requisitos para jogar</p>
                <div className="reqContent">
                  <div className="reqDescription">
                    <p><FaCircle className="reqIcon"/> Cross Fire <b>instalado</b> na máquina</p>
                    <p><FaCircle className="reqIcon"/> Ter uma conta no <b>Cross Fire</b></p>
                    <p><FaCircle className="reqIcon"/> Ter o <b>Anti-cheater</b> Black Box instalado na máquina</p>
                    <p><FaCircle className="reqIcon"/> Ter uma conta no <b>Black Box</b></p>
                    <p><FaCircle className="reqIcon"/> Servidor TS3 ou Discord</p>
                  </div>
                  <div>
                    <button className="btnReq"><LuShieldCheck className="btnReqIcon"/> Ir para Anti-cheater</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Match