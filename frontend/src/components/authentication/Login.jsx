import React, { Component } from 'react';
import { AUTH_TOKEN } from './../../utils/constans/constans';

class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      login: true,
      email: '',
      password: '',
      name: '',
    }
  }

  render () {
    const { login, email, password, name } = this.state;
    return (
      <section>
        <h4>{login ? "Login" : "Logout"}</h4>
        <div>
          {!login && (
            <input
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
              type="text"
              placeholder="Your name"
            />
          )}
          <input
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
            type="text"
            placeholder="Your email address"
          />
          <input
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            placeholder="Choose a safe password"
          />
        </div>
        <div className="flex mt3">
          <div className="pointer mr2 button" onClick={() => this._confirm()}>
            {login ? "login" : "create account"}
          </div>
          <div
            className="pointer button"
            onClick={() => this.setState({ login: !login })}
          >
            {login ? "need to create an account?" : "already have an account?"}
          </div>
        </div>
      </section>
    );
  }

  _confirm = async () => {
    //hola
  };

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token);
  };
}

export default Login;
