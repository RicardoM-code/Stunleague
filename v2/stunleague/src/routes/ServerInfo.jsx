import { useState } from 'react';
import HeaderHome from '../components/HeaderHome';
import TsInfo from '../img/TsInfo.png';
import { IoIosArrowRoundBack } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import TsServers from '../components/TsServers';

import '../styles/components/ServerInfo.sass'
import '../styles/components/ServerInfo.css'

function ServerInfo() {
  const [memory, setMemory] = useState("opt1"); 

  const handleMemoryChange = (event) => {
    setMemory(event.target.value); 
  };

  const servers = [
    { id: 1, name: 'Servidor 1' },
    { id: 2, name: 'Servidor 2' },
    { id: 3, name: 'Servidor 3' },

  ];

  return (
    <div>
      <div className="pageContent">
        <HeaderHome/>
        <div className='back'>
          <div>
            <button className='backBtn'> 
              <IoIosArrowRoundBack className='backIcon'/>
            </button>
          </div>
          <div className='backTxt'>
            Voltar
          </div>
        </div>
        <div className='serverAquisition'>
          <div>
            <img src={TsInfo} alt="" className='imgTs' />
          </div>
          <div className='tsConfig'>
            <div>
              <span className='serverTitle'>50 slots/vagas</span>
            </div>
            <div className='serverConfig'>
              <div className='serverNameContainer'>
                <span className='serverName'>Nome do servidor</span>
                <input type="text" placeholder='Digite aqui' className='serverNameInput' />
              </div>
              <div className='serverMemoryContainer'>
                <span className='serverMemory'>Memória RAM</span>
                <select name="memory" id="memory" className='serverMemoryQnt' value={memory} onChange={handleMemoryChange}>
                  <option value="opt1">2GB</option>
                  <option value="opt2">4GB</option>
                </select>
              </div>
            </div>
            <div className='radioGroup'>
              <p className='radioGroupTxt'>Período do plano</p>
              <div className='radioOptGroup'>
                  <div className='radioOpt'>
                      <input type="radio" id="opt1" name="radioOpt" value="opt1" className='radio' /> 
                      <label htmlFor="opt1" className='radioLabel'>Mensal</label>
                  </div>
                  <div className='radioOpt'>
                      <input type="radio" id="opt2" name="radioOpt" value="opt2" className='radio' />
                      <label htmlFor="opt2" className='radioLabel'>Trimestral</label>
                  </div>
                  <div className='radioOpt'>
                      <input type="radio" id="opt3" name="radioOpt" value="opt3" className='radio' />
                      <label htmlFor="opt3" className='radioLabel'>Anual</label>
                  </div>
              </div>
            </div>
            <div>
              <span className='price'>RS 1800,00</span>
            </div>
            <div>
              <button className='btnAdd'>
                <span className='btnAddTxt'>Adicionar ao carrinho</span>
                <CiShoppingCart className='btnAddIcon'/> 
              </button>  
            </div>
          </div>
        </div>
        <div className='serverDescription'>
          <p className='serverDescTittle'>Descrição</p>
          <ul className='serverUl'>
            <li className='serverLi'>30 Slots</li>
            <li className='serverLi'>Todos os codecs</li>
            <li className='serverLi'>Painel de Controle pela Central do Cliente</li>
            <li className='serverLi'>Registros/Canais Ilimitados</li>
            <li className='serverLi'>DNS Personalizado</li>
            <li className='serverLi'>24/7 Suporte Online</li>
          </ul>
        </div>
        <div className='servers'>
              <div className='serversHead'>
                <span>Sugestões</span>
              </div>
              <div className='serversMap'>
                {servers.map(server => (
                  <TsServers key={server.id} />
                ))}
              </div>
            </div>
      </div>
    </div>
  )
}

export default ServerInfo;
