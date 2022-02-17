import {Component} from 'react'

const styles = {
  title:{
    fontSize: "24px",
    marginBottom: "30px"
  }
}


class Title extends Component{
  render(){
    return(
      <h2 style={styles.title}>Tienda</h2>
    )
  }
}

export default Title