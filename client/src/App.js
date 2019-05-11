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
        <h1>Healthstone Free Card Search</h1>
        <Search setSearch={this.setSearch} />
        <Cards cards={cards_name_sorted} />
      </Fragment>
    );
  }
}

export default App;
