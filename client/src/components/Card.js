import React, { PureComponent } from 'react';

class Card extends PureComponent {
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
            alt='Card image'
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
  boxShadow: '0 0 15px rgba(10, 10, 10, 0.3)',
  backgroundColor: '#cac7c7'
};

let cardStyle = {
  //   paddingRight: '0px !important',
  //   paddingLeft: '0px !important'
};

export default Card;
