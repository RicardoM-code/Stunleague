import Logo from '../img/Logo.png'
import { RxAvatar } from "react-icons/rx"
import { MdAttachMoney } from "react-icons/md"
import { CiBellOn, CiMedal, CiPlay1, CiShoppingCart } from "react-icons/ci"


import '../styles/components/LeftBar.sass'

function LeftBar() {
  return (
    <div>
        <div className='SideBar'>
            <div className='Logo'>
                <img src={Logo} />
            </div>
            <div className='Buttons'>
                <button className='ButtonRed'>
                    <CiPlay1 className='Icon'/>
                    <p>Stun Match</p>
                </button>
                <button className='Button'>
                    <CiShoppingCart className='Icon'/>
                    <p>Loja</p>
                </button>
                <button className='Button'>
                    <CiMedal className='Icon'/>
                    <p>Ranking</p>
                </button>
            </div>
            <div className='Footer'>
                <RxAvatar className='AvatarLogo'/>
                <div className='FooterCenter'>
                    <p>Nome do usuario</p>
                    <p><MdAttachMoney /> Valor</p>
                </div>
                <CiBellOn className='Bell'/>
            </div>
        </div>
    </div>
  )
}

export default LeftBar