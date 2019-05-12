import React, { Component } from 'react';
import Card from './Card';

class Cards extends Component {
  render() {
    return (
      <div className='container'>
        <div className='card-deck' style={cardDeckCustomStyle}>
          {this.props.cards.map(card => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    );
  }
}

const cardDeckCustomStyle = {
  paddingTop: '2em'
};

export default Cards;
