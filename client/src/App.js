import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Cards from './components/Cards';
import './App.css';

class App extends Component {
  state = {
    cardIds: []
  };

  cardCollection = null;

  componentDidMount() {
    this.cardCollection = new Map();
    // get list w/ axios
    try {
      axios.get('/api/card').then(
        res => {
          res.data.forEach(card => {
            this.cardCollection.set(card.id, card);
          });
          // verified we have the cards at this point
          this.setState({ cardIds: res.data.map(card => card.id) });
        },
        err => {
          console.log('on err ' + err);
        }
      );
    } catch (err) {
      console.log('catch block: ' + err);
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
    const cards_name_sorted = this.state.cardIds
      .map(cardId => this.cardCollection.get(cardId))
      .sort((a, b) => (a.name < b.name ? -1 : 1));

    return (
      <Fragment>
        <div className='container'>
          <div className='card-deck'>
            <div className='col-lg-12 pb-3' style={cardStyle}>
              <div className='card card-custom border-white border-0 bg-transparent'>
                <img
                  style={cardCustomImg}
                  src='https://static1.squarespace.com/static/5b0cd5573e2d09d20a0823d5/t/5ba85229104c7b4a52b5e286/1537757753306/Hearthstone+Logo.png'
                />
                <Search setSearch={this.setSearch} />
              </div>
            </div>
          </div>
        </div>

        <Cards cards={cards_name_sorted} />
      </Fragment>
    );
  }
}

let cardCustomImg = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',

  width: '100%',
  height: 'auto',

  maxWidth: '1000px'
};

let cardStyle = {
  //   paddingRight: '0px !important',
  //   paddingLeft: '0px !important'
};

export default App;
