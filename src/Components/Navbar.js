import { Component } from "react";
import Logo from './Logo'
import Carro from './Carro'

const styles = {
  navbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "100",
    justifyContent: "space-between",
    position: "relative",
    padding: "0 50px",
    boxShadow: '0 2px 3px rgb(0,0,0,.1)'
  }

}

class Nav extends Component {
  render() {
    const { esCarroVisible, mostrarCarro, carro } = this.props
    return (
      <nav style={styles.navbar}>
        <Logo/>
        <Carro esCarroVisible={esCarroVisible} mostrarCarro={mostrarCarro} carro={carro}/>
      </nav>
    );
  }
}

export default Nav;
