import HeaderHome from '../components/HeaderHome'
import TsServers from '../components/TsServers'
import Servers from '../img/Servers.png'

import '../styles/components/Home.sass'



function Home() {

  const servers = [
    { id: 1, name: 'Servidor 1' },
    { id: 2, name: 'Servidor 2' },
    { id: 3, name: 'Servidor 3' },

  ];




  return (
    <div>
        <div className='pageContent'>
            <HeaderHome/>
            <div className='firstContent'>
              <div className='text'>
                <p className='txt1'>Tenha uma comunicação de elite com seu time</p>
                <p className='txt2'>Descubra a potência máxima para seus jogos com servidores dedicados de TS3. Performace, suporte e estabilidade</p>
              </div>
              <div className='imgServers'>
                <img src={Servers} alt="" />
              </div>
            </div>
            <div className='servers'>
              <div className='serversHead'>
                <span>Servidores</span>
              </div>
              <div className='serversMap'>
                {servers.map(server => (
                  <TsServers key={server.id} />
                ))}
              </div>
            </div>
            <div className='aboutServers'>
              <div className='aboutTxt'>
                <span>Sobre os servidores</span>
              </div>
              <div className='cardContainer'>
                <div className='card'>
                  <p className='cardTitle'>O que são os servidores</p>
                  <p className='cardBody'>
                    Os servidores TS3 são plataformas para 
                    comunicação por voz em tempo real, amplamente 
                    utilizados em jogos online facilitando entre os 
                    jogadores.
                  </p>
                </div>
                <div className='card'>
                  <p className='cardTitle'>Como funciona</p>
                  <p className='cardBody'>
                    O servidor aprimora a comunicação no jogo com canais de áudio de 
                    alta qualidade, permitindo coordenação tática e resposta 
                    rápida durante o jogo.
                  </p>
                </div>
                <div className='card'>
                  <p className='cardTitle'>Os benefícios</p>
                  <p className='cardBody'>
                    O TS3 eleva a performance com uma comunicação cristalina e 
                    organização eficaz do time, visando a eficiência da tática 
                    e colaboração.
                  </p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home