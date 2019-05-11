import React, { Component } from 'react';
import Card from './Card';

class Cards extends Component {
  render() {
    // return (
    //   <div>
    //     <Card />
    //   </div>
    // );
    return this.props.cards.map(card => <Card key={card.id} card={card} />);
  }
}

export default Cards;
