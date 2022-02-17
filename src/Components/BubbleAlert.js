import {Component} from 'react'

const styles = {
  bubbleAlert: {
    backgroundColor: '#e9725a',
    color: '#ffffff',
    borderRadius: "15px",
    padding: "2px 5px",
    fontSize: ".9rem",
    width: "20px",
    display: "inline-block",
    textAlign: 'center'    
  }
}



class BubbleAlert extends Component{

  //método para mostrar la cantidad de productos en el carro
  getNumber (n) {
    if (!n) {return ' '}
    return n > 9 ? '9+' : n
  }

  render(){
    const{ value } = this.props
    return(
      <span style={styles.bubbleAlert}>
      {this.getNumber(value)}
      </span>
    )
  }
}

export default BubbleAlert