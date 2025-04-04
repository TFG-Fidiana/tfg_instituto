import "../css/login.css"

function Login() {
    return (
        <div className="login container mt-5">
            <h1 className="title-login">INICIAR SESIÓN</h1>

            <form className="form-login">
                <div className="form-group">
                    <label className=" form-label" htmlFor="inputUsuario">Usuario</label>
                    <input
                        id="inputUsuario"
                        type="text"
                        placeholder="Introduce tu usuario"
                        className=" form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="inputContraseña">Contraseña</label>
                    <input
                id="inputContraseña"
                    type="password"
                    placeholder="Introduce tu contraseña"
                    className="form-control"
                />
                </div>
                
                <div className="contain-botonlogin"> 
                    <button type="submit" className="btnEntrar">
                        Acceder
                    </button>
                </div>
            </form>
            <p className="pass-forgot">¿Has olvidado tu contraseña?</p>
        </div>

    )
}

export default Login;
