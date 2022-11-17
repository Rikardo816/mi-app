import { Component } from "react";

class Button extends Component {
  state = {};
  constructor(props) {
    super(props);
    console.log("constructor", props);
  }

  componentDidMount() {
    console.log("componentDidMound"); //Para actualizar el estado luego de un render
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componet did update", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("desmontando componente", this.props, this.state);
  }

  render() {
    console.log("ejecutando metodo render de button");
    return <button onClick={() => this.setState({ prop: 1 })}>ENVIAR</button>;
  }
}

class Input extends Component {
  render() {
    return (
      <input
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}

class App extends Component {
  state = {
    valor: 3,
    nombre: "",
    apellido: "",
  };

  updateNombre = (v) => {
    this.updateValues('nombre', v.target.value)
  }

  updateValues = (prop, value) => {
    this.setState({ [prop]: value });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <p>Hola mundo</p>
        {this.state.valor === 3 ? <Button chanchito="feliz" /> : null}
        <button
          className={`${this.state.valor}`}
          onClick={() => this.setState({ valor: 2 })}
        >
          EnviarApp
        </button>
        <p>
          Nombre Completo: {`${this.state.nombre} ${this.state.apellido}`}
          <Input
            value={this.state.nombre}
            onChange={this.updateNombre}
          />
          <Input
            value={this.state.apellido}
            onChange={(e) =>
              this.updateValues("apellido", e.target.value)
            }
          />
        </p>
      </div>
    );
  }
}

export default App;
