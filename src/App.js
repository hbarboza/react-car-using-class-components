import { Component } from "react";
import Productos from "./Components/Productos";
import Layout from "./Components/Layout";
import Title from "./Components/Title";
import Nav from "./Components/Navbar";

class App extends Component {
  //definir el state
  state = {
    productos: [
      {
        name: "Tomate",
        price: 1500,
        img: "/productos/tomate.jpg"
      },
      {
        name: "Arvejas",
        price: 1000,
        img: "/productos/arvejas.jpg"
      },
      {
        name: "Lechuga",
        price: 800,
        img: "/productos/lechuga.jpg"
      }
    ],
    //Elemento carro
    carro: [],
    esCarroVisible: false
  };

  //Definir el método para agregar al carro
  agregarAlCarro = producto => {
    const { carro } = this.state;
    if (carro.find(x => x.name === producto.name)) {
      const newCarro = carro.map(x =>
        x.name === producto.name
          ? {
              ...x,
              cantidad: x.cantidad + 1
            }
          : x
      );
      return this.setState({ carro: newCarro });
    }

    //console.log(producto)
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1
      })
    });
  };

  mostrarCarro = () => {
    if (!this.state.carro.length) {
      return;
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible });
  };

  render() {
    const { esCarroVisible } = this.state;

    return (
      <div>
        <Nav
          carro={this.state.carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
