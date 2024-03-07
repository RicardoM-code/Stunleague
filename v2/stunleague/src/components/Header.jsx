import Hero from '../img/Hero.png'
import Logo from '../img/Logo.png'

import '../styles/components/Header.sass'

function Header() {
  return (
    <div className='header' >
        <div style={{backgroundImage: `url(${Hero})`}}>
            <img src={Logo}/>
        </div>

    </div>
  )
}

export default Header