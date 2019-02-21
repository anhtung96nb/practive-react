import React, { Component } from 'react';
import '../style/Login.css'
class Login extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <a  href="./index.html" className="title"><h3>Connexion</h3></a>
          <div className="h-right">
            <a href="./index.html">pass de compte ?
            </a>
          </div>
        </div>
        <div className="form">
          <form>
            <div>
            <label>Nom d'utilisateur</label>
            <br />
            <input type="text" name=" user" defaultValue="Benbjamin" />
            <br />
            <input type="text" name="password" defaultValue="Mot de Passe" />
            <br />
            <a href="index" className="forget-password"> Mot de pass oubulé?</a>
            </div>
            <div className="or">
              <div className="or-g"></div>
              <div className="or-content">ou</div>
              <div className="or-g"></div>
            </div>
            <div className="sign-facebook">
               
                <a href="/index.html">
                <p><i className="fab fa-facebook-square"></i>Connexion avec Facebook</p>
              </a>
            </div>
            <div className="submit">
              <input type="button" name="submit" defaultValue="Me Connecter" />
            </div>
          </form>
        </div>
      </div>
    
    );
  }
}

export default Login;