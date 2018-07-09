import React, { Component } from 'react';
import './Body.css';


class Choix extends Component {
    render() {
      const index_utilisateur = this.props.utilisateur === 'joueur' ? 0 : 1;
      
      const tab_choix = this.props.state.possibilites.map(
        x => <img src={`/IMG/${x}.png`} 
        width="120px" 
        alt={x} 
        key={x} 
        height="120px" 
        className={this.props.state.choix[index_utilisateur] === x ? 'choisi' : 'paschoisi'} 
        onClick = {this.props.utilisateur === 'joueur' ? this.props.handleClick : null} 
          />)


        return (
        <div>
          <h4>{this.props.utilisateur === 'joueur' ? 'Ton choix':'Choix ordi'}</h4>
          {tab_choix}		
        </div>
      );
    }
  }

  export default Choix;
