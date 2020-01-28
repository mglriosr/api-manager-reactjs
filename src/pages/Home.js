import React, { Component } from 'react'

class Home extends Component {

  state = ({
    loading: true,
    error: null,
    data: []
  })

  componentDidMount(){
    this.fetchData()
  }

  async fetchData(){
    this.setState({loading: true, error: null})
    try {
      var data;
      var response = await fetch('https://jsonplaceholder.typicode.com/users');
      data = await response.json()
      this.setState({loading: false, data: data})
    } catch (error) {
      this.setState({loading: false, error: error})
    }
  }

  render(){
    console.log(this.state.data)
    if ( this.state.loading === true ) {
      return <p>Cargando...</p>
    }

    if ( this.state.error ) {
      return <p>Ocurrió un error :(</p>
    }

    return this.state.data.map((item) =>
      <li key={item.id}>{item.name}</li>
    );
  }
}

export default Home;