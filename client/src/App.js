import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Cards from './components/Cards';

class App extends Component {
  state = {
    cardIds: []
  };

  cardCollection = null;

  componentDidMount() {
    this.cardCollection = new Map();

    try {
      // get card list w/ axios
      axios.get('/api/card').then(
        res => {
          res.data.forEach(card => {
            this.cardCollection.set(card.id, card);
          });
          this.setState({ cardIds: res.data.map(card => card.id) });
        },
        err => {
          console.log(`Error retrieving cards: ${err.message}.`);
        }
      );
    } catch (err) {
      console.log(`Error retrieving cards: ${err.message}.`);
    }
  }

  setSearch = nameToSearch => {
    const nametoSearchLower = nameToSearch.toLowerCase();

    const newIds = [...this.cardCollection.values()] // map values to array
      .filter(card => card.name.toLowerCase().includes(nametoSearchLower)) // make sure includes nameToSearch
      .map(card => card.id); // get just the id

    this.setState({ cardIds: newIds });
  };

  render() {
    const cardsNameSorted = this.state.cardIds
      .map(cardId => this.cardCollection.get(cardId))
      .sort((a, b) => (a.name < b.name ? -1 : 1));

    return (
      <Fragment>
        {/* Start header logo image, search bar. */}
        <div className='container'>
          <div className='card-deck'>
            <div className='col-lg-12 pb-3'>
              <div className='card border-0 bg-transparent'>
                <img
                  style={logoImg}
                  src={hearthStoneLogoURI}
                  alt='Hearthstone logo'
                />
                <Search setSearch={this.setSearch} />
              </div>
            </div>
          </div>
        </div>
        {/* End header logo image, search bar. */}

        {/* Start card list */}
        <Cards cards={cardsNameSorted} />
        {/* End card list */}

        {/* Start footer */}
        <footer className='footer mt-auto py-3' style={footerStyle}>
          <div className='container'>
            <span className='text-black-50'>
              Created by Kent Rose, May 2019.
            </span>
          </div>
        </footer>
        {/* End footer */}
      </Fragment>
    );
  }
}

const hearthStoneLogoURI =
  'https://static1.squarespace.com/static/5b0cd5573e2d09d20a0823d5/t/5ba85229104c7b4a52b5e286/1537757753306/Hearthstone+Logo.png';

const footerStyle = {
  backgroundColor: '#cac7c7'
};

const logoImg = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',

  width: '100%',
  height: 'auto',

  maxWidth: '1000px'
};

export default App;
