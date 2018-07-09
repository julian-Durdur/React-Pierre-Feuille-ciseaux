import React, { Component } from 'react';
import Choix from './Choix';
import './Body.css';
import Gagnant from "./Gagnant";
import Score from "./Score";


class Body extends Component {
    render() {  
      return (
        <div>
          <Choix utilisateur="joueur" state={this.props.state} handleClick={this.props.handleClick} />
          {this.props.state.choix[1]!=='' ? <Choix utilisateur="ordi" state={this.props.state} handleClick={this.props.handleClick} /> : ''}
          <Gagnant state={this.props.state} />
          <Score score={this.props.state.score} />
        </div>
      );
    }
  }

  export default Body;
