import React, { PureComponent } from 'react';

class Card extends PureComponent {
  render() {
    const { thumbnailURI } = this.props.card;
    return (
      <div>
        <img src={thumbnailURI} />
      </div>
    );
  }
}

export default Card;
