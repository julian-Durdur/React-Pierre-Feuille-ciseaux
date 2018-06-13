import React, { Component } from 'react';
import './App.css';
import Header from   "./Header";
import Footer from   "./Footer";
import Body from   "./Body";

class App extends Component {
  state = {
    possibilites: ["feuille", "ciseaux", "pierre"],
    choix: ["",""],
    score: [0,0]
  }

  handleClick = (event) => {
    console.log('Choix joueur :' + event.currentTarget.alt)
    const index_choix_ordinateur = Math.floor(Math.random() * Math.floor(3));
    console.log('Choix ordi :' + this.state.possibilites[index_choix_ordinateur])
    this.setState({ choix:[event.currentTarget.alt, this.state.possibilites[index_choix_ordinateur]] })
    
    const resultat = '';
    if (event.currentTarget.alt === this.state.possibilites[index_choix_ordinateur]) {
      resultat = 'egalite';
    } 
    else if ()

  }

  render() {
    return (
      <div>
      <Header />
      <Body state={this.state} handleClick={this.handleClick} />
      <Footer />
      </div>
    );
  }
}

export default App;
