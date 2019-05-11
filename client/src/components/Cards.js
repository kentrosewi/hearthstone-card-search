import React, { Component } from 'react';
import Card from './Card';

class Cards extends Component {
  render() {
    return (
      <ul>
        {this.props.cards.map(card => (
          <Card styleClass='float: left' key={card.id} card={card} />
        ))}
      </ul>
    );
  }
}

export default Cards;
