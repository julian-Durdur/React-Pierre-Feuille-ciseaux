import React, { Component } from 'react';
import './App.css';
import Header from   "./Header";
import Footer from   "./Footer";
import Body from   "./Body";

class App extends Component {
  state = {
    possibilites: ["feuille", "ciseaux", "pierre"],
    choix: ["",""],
    score: [0,0],
		gagnant: ''
  }

  handleClick = (event) => {
		let gagnant = ''
		const choix_joueur = event.currentTarget.alt;
    const index_choix_ordi = Math.floor(Math.random() * Math.floor(this.state.possibilites.length));
		const choix_ordi = this.state.possibilites[index_choix_ordi];

    console.log('Choix joueur :' + choix_joueur);
    console.log('Choix ordi :' + choix_ordi);
    this.setState({ choix:[choix_joueur, choix_ordi] })
    
    if (choix_joueur === choix_ordi) {
      gagnant = 'egalite';
    }
		else if (
			(choix_joueur === 'feuille' && choix_ordi === 'ciseaux')
			||
			(choix_joueur === 'ciseaux' && choix_ordi === 'pierre')
			||
			(choix_joueur === 'pierre' && choix_ordi === 'feuille')
		) {
      gagnant = 'ordi';
		}
		else {
      gagnant = 'joueur';
		}
		this.setState({gagnant:gagnant});
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
