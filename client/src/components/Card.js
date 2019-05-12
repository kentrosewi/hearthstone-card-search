import React, { PureComponent } from 'react';

class Card extends PureComponent {
  state = {
    imageLoadError: false
  };

  render() {
    const { thumbnailURI } = this.props.card;

    return (
      <div className='col-md-6 col-lg-4 pb-3' style={cardStyle}>
        <div
          className='card card-custom border-white border-0'
          style={cardCustom}
        >
          <img
            className='card-custom-img'
            style={cardCustomImg}
            src={thumbnailURI}
            alt='Heathstone card'
            onError={e => {
              if (!this.state.imageLoadError) {
                console.log('Card load error, getting default card back.');

                e.target.src =
                  'https://wow.zamimg.com/images/hearthstone/backs/original/Card_Back_Default.png';
                this.setState({ imageLoadError: true });
              }
            }}
          />
        </div>
      </div>
    );
  }
}

let cardCustomImg = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',

  width: '100%',
  height: 'auto',

  maxWidth: '307px'
};

let cardCustom = {
  overflow: 'hidden',
  backgroundColor: 'transparent'
};

let cardStyle = {
  //   paddingRight: '0px !important',
  //   paddingLeft: '0px !important'
};

export default Card;
