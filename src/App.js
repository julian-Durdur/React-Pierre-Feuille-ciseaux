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
    let score_joueur = this.state.score[0]
    let score_ordi = this.state.score[1]
    
		const choix_joueur = event.currentTarget.alt;
    const index_choix_ordi = Math.floor(Math.random() * this.state.possibilites.length); 
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
      score_ordi++;      
		}
		else {
      gagnant = 'joueur';
      score_joueur++;
		}
		this.setState({gagnant: gagnant, score: [score_joueur, score_ordi]});
  }


  render() {
    return (
      <div className="BODY">
      <Header />
      <Body state={this.state} handleClick={this.handleClick} />
      <Footer />
      </div>
    );
  }
}

export default App;
