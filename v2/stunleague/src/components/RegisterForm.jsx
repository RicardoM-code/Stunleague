import Google from '../img/Google.png'
import Discord from '../img/Discord.png'
import { IoIosArrowForward } from "react-icons/io";
import PropTypes from 'prop-types'

import '../styles/components/RegisterForm.sass'

function RegisterForm({ onBackClick }) {
    return (
        <>
            <div className="registerContent">
                <div className="inputName">
                    <span className="nameTxt">Nome do usuário</span>
                    <input className="nameInput" type="text" placeholder="Digite aqui" />
                </div>
                <div className="inputName">
                    <span className="nameTxt">E-mail</span>
                    <input className="nameInput" type="text" placeholder="Digite aqui" />
                </div>
                <div className="inputName">
                    <span className="nameTxt">CPF</span>
                    <input className="nameInput" type="text" placeholder="Digite aqui" />
                </div>
                <div className="inputName">
                    <span className="nameTxt">Senha</span>
                    <input className="nameInput" type="text" placeholder="Digite aqui" />
                </div>
                <div className="inputName">
                    <span className="nameTxt">Confirmar senha</span>
                    <input className="nameInput" type="text" placeholder="Digite aqui" />
                </div>
            </div>
            <div className='useContent'>
                <div className="use1">
                    <div className="useTxt1">
                        <p>Utilizar</p>
                    </div>
                    <div className="useIcons1">
                        <img className="googleIcon1" src={Google} alt="Google Logo" />
                        <img className="discordIcon1" src={Discord} alt="Discord Logo" />
                    </div>
                </div>
            </div>
            <div className='buttonsContent'>
                <div className="buttons1">
                    <button className="registerBtn1" onClick={onBackClick}>
                        <span className="registerBtnContent1">
                            Voltar
                        </span>
                    </button>
                    <button className="enterBtn1">
                        <span className="enterBtnContent1">
                            Finalizar
                        </span>
                        <span className="enterBtnIcon1">
                            <IoIosArrowForward />
                        </span>
                    </button>
                </div>
            </div>
        </>
        
    );
}

export default RegisterForm;

RegisterForm.propTypes = {
    onBackClick: PropTypes.func.isRequired,
}
