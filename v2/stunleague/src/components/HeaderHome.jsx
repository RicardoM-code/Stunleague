import Logo from '../img/Logo.png'
import { FaRegUser, FaShoppingCart } from "react-icons/fa";



import '../styles/components/HeaderHome.sass'

function HeaderHome() {
  return (
    <div className='headerHome' >
        <div className='logo'>
            <img className='logoImg' src={Logo}/>
        </div>
        <div className='icons'>
            <div className='userIcon'>
                <FaRegUser />
            </div>
            <div className='cartIcon'>
                <FaShoppingCart />
            </div>
        </div>
    </div>
  )
}

export default HeaderHome