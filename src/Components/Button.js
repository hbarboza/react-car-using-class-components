import {Component} from 'react'

const styles = {
  button: {
    border: 'none',
    backgroundColor: 'green',
    color: 'white',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
  }
}


class Button extends Component{
  render(){
    return(
      //Recibe todas las props como un spread operator
      <button style={styles.button} {...this.props} ></button>
    )
  }
}

export default Button