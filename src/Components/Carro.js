import { Component } from "react";
import BubbleAlert from "./BubbleAlert"
import DetallesCarro from "./DetallesCarro"

const styles = {
  carro: {
    color: "#fff",
    borderRadius: "15px",
    cursor: "pointer",
    padding: "15px",
    border: "none",
    backgroundColor: "#359a2c"
  },
  bubble: { 
    position: 'relative',
    left: '12px',
    top: '20px',
  }
};

class Carro extends Component {
  render() {
    const { carro, esCarroVisible, mostrarCarro } = this.props
    //Reduce function
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
    return (
      <div>
        <span style={styles.bubble}>
          {cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}
        </span>
        <button onClick={mostrarCarro} style={styles.carro}>
          Carro
        </button>
        {esCarroVisible ? <DetallesCarro carro={carro} /> : null}
      </div>
    );
  }
}

export default Carro;
