import React, { Component } from 'react';
import './Body.css';

class Choix_joueur extends Component {
    render() {  
      console.log('essai'+this.props.state.choix[0])
      const tab_choix_joueur = this.props.state.possibilites.map(
          x => <img src={`/IMG/${x}.png`} width="120px" alt={x} key={x} height="120px" className={this.props.state.choix[0] === x ? 'choisi' : 'paschoisi'} onClick={this.props.handleClick}  />)
			if(this.props.state.choix[1]!=='') {
				 console.log('ordi a joué');
			 }
			
			
      return (
        <div>
        <h4> Ton choix</h4>
        {tab_choix_joueur}
    
				
        {/*<h4> Choix d'ordi</h4>
				{tab_choix_ordi}
      */}
        </div>
      );
    }
  }

  export default Choix_joueur;
