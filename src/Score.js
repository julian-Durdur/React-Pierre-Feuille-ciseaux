import React, { Component } from 'react';
import './Score.css';



class Score extends Component {
    render(){
        return(
            <div className="divScore">
                <div className="test">
                    <div>Scores</div>
                    <div>Joueur : {this.props.score[0]}</div>
                    <div>Ordi : {this.props.score[1]}</div>
                </div>    
            </div>
        );
    }
}

export default Score;
