import React, { Component } from 'react';


class Gagnant extends Component {
    render(){
        return(
            <div>
            <h4> Gagnant est {this.props.state.gagnant}</h4>
            </div>
        );
    }
}

export default Gagnant;
