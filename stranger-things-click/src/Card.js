import React, { Component } from 'react';


class Card extends Component {
 

render () {
    const clicked = this.props.hasBeenClicked ? 'YEah I was clicked' : 'Nope I wasnt'
    return (
        <div>
            {this.props.name}
            { clicked }


            </div>




    )
}





}

export default Card;