import React, { Component } from 'react';
import './Body.css';

class Body extends Component {
    render() {  
        console.log('essai'+this.props.state.choix[0])
      const tab_img_possibilites = this.props.state.possibilites.map(
          x => <img src={`/IMG/${x}.png`} width="120px" alt={x} key={x} height="120px" className={this.props.state.choix[0] === x ? 'choisi' : 'paschoisi'} onClick={this.props.handleClick}  />
    
        )
      return (
        <div>
        <h4> Ton choix</h4>
        {tab_img_possibilites}
    

        {/*<h4> Choix d'ordi</h4>
        <img src="" />
        <img src="" />
        <img src="" />
      */}
        </div>
      );
    }
  }

  export default Body;
