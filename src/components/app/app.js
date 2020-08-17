/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';

import Header from '../header';
import ErrorBoundry from '../error-boundry';
import RandomBird from '../random-bird';
import { BirdDetails, BirdList } from '../sb-components';
import Row from '../row';

import './app.css';

export default class App extends Component {
  state = {
    step: 0,
    birdId: null,
    id: 0,
    score: 0,
    selectedItem: null,
  };

  componentDidMount = () => {
    const id = Math.floor(Math.random() * 6);
    this.setState({ id });
  };

  onItemSelected = (id) => this.setState({ selectedItem: id });

  render() {
    const { step, score, id, selectedItem } = this.state;
    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header score={score} />
          <RandomBird step={step} id={id} />
          <Row
            left={<BirdList onItemSelected={this.onItemSelected} step={step} />}
            right={<BirdDetails itemId={selectedItem} step={step} />}
          />
        </div>
      </ErrorBoundry>
    );
  }
}
