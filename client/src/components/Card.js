import React, { PureComponent } from 'react';

class Card extends PureComponent {
  state = {
    imageLoadError: false
  };

  render() {
    const { thumbnailURI, name, id } = this.props.card;

    return (
      <div className='col-md-6 col-lg-4 pb-3'>
        <div className='card border-0' style={cardCustom}>
          <img
            style={cardCustomImg}
            src={thumbnailURI}
            alt={`Name: ${name}, ID: ${id}.`}
            onError={e => {
              // prevent infinite looping if backup image fails to load
              if (!this.state.imageLoadError) {
                console.log('Card load error, getting default card back.');

                e.target.src = cardBackDefault;
                this.setState({ imageLoadError: true });
              }
            }}
          />
        </div>
      </div>
    );
  }
}

const cardBackDefault =
  'https://wow.zamimg.com/images/hearthstone/backs/original/Card_Back_Default.png';

const cardCustomImg = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',

  width: '100%',
  height: 'auto',

  maxWidth: '307px'
};

const cardCustom = {
  overflow: 'hidden',
  backgroundColor: 'transparent'
};

export default Card;
