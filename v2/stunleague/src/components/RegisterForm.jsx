import '../styles/components/RegisterForm.sass'

function RegisterForm() {
    return (
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
    );
}

export default RegisterForm;
