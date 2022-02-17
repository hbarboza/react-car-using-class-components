import { Component } from "react";
import Button from './Button'

const styles = {
  producto: {
    border: 'solid 1px #eee',
    boxShadow: '0px 5px 5px rgba(0,0,0,.10)',
    width: '30%',
    padding: '10px 15px',
    borderRadius: '5px'
  },
  img: {
    maxWidth: '100%'
  }
}

class Producto extends Component {
  render() {

    //console.log(this.props)
    const { producto, agregarAlCarro } = this.props        

    return (
      <div style={styles.producto}>
        <img style={styles.img} src={producto.img} alt={producto.img}/>
        <h3>{producto.name}</h3>
        <p>{producto.price}</p>
        {/* Pasa las props al componente button */}
        <Button onClick={()=> agregarAlCarro(producto)}>
          Agregar al carro
        </Button>
      </div>
    );
  }
}

export default Producto;
