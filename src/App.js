import React from "react";
import "./App.css";
import FormLogin from "./Componentes/FormLogin";
import Welcome from "./Componentes/Welcome";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.setInputs = this.setInputs.bind(this);
    this.mensage = "";
    this.state = {
      tela: false,
      nome: "",
      email: "",
      senha: "",
    };
  }
  setInputs(e) {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  handleLogin = (e) => {
    e.preventDefault();
    if (
      this.state.email === "marcela@gmail.com" &&
      this.state.senha === "1234"
    ) {
      this.setState({ tela: true });
    } else {
      this.setState({ tela: false });
      this.mensage = "Verifique seu email e senha";
    }
  };
  render() {
    if (this.state.tela) {
      return <Welcome nome={this.state.nome} />;
    } else {
      return (
        <div id="App">
          <FormLogin onSubmit={this.handleLogin} setInputs={this.setInputs} />
          {this.mensage.length > 0 && (
            <div className="container d-flex justify-content-center">
              <h2>{this.mensage}</h2>
            </div>
          )}
        </div>
      );
    }
  }
}

export default App;
