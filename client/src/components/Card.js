import React, { PureComponent } from 'react';

class Card extends PureComponent {
  render() {
    const { thumbnailURI } = this.props.card;
    return <img src={thumbnailURI} />;
  }
}

export default Card;
