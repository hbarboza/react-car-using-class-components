import { Component } from "react";

const styles = {
  detallesCarro: {
    backgroundColor: "#fff",
    position: "absolute",
    marginTop: "30px",
    boxShadow: "1px 5px 5px rgb(0,0,0,.3",
    borderRadius: "5px",
    width: "300px",
    right: "50px"
  }, 
  list: {
    listStyleType: 'none',
    margin: '0px',
    padding: '0px'
  },
  item: {
    display: 'flex',    
    padding: '15px 10px', 
    alignItems: 'center',
    fontSize: '13px',
    justifyContent: 'space-around',
    borderBottom: 'solid 1px #aaa'
   }
  
};

class detallesCarro extends Component {
  render() {
    const { carro } = this.props;
    console.log(carro);

    return (
      <div style={styles.detallesCarro}>
        <ul style={styles.list}>
          {carro.map(producto => (
            <li style={styles.item} key={producto.name}>
              <img
                width="50px"
                height="32px"
                alt={producto.name}
                src={producto.img}
              />
              <span>{producto.name} </span>
              <span>{producto.cantidad}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default detallesCarro;
