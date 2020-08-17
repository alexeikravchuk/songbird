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
    id: 1,
    isCorrect: false,
    win: false,
    score: 0,
    selectedItem: null,
  };

  componentDidMount = () => {
    const id = Math.floor(Math.random() * 6) + 1;
    this.setState({ id });
  };

  onItemSelected = (id) => {
    this.setState(({ id: currentId }) => {
      const isCorrect = currentId === id;
      return {
        selectedItem: id,
        id: isCorrect ? id : currentId,
        isCorrect,
      };
    });
  };

  nextPage = () => {
    const { isCorrect } = this.state;
    if (isCorrect) {
      this.setState(({ step }) => {
        return {
          step: step + 1,
          isCorrect: false,
        };
      });
    }
  };

  render() {
    const { step, score, id, selectedItem, isCorrect } = this.state;
    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header score={score} />
          <RandomBird step={step} id={id} isCorrect={isCorrect} />
          <Row
            left={<BirdList onItemSelected={this.onItemSelected} step={step} />}
            right={<BirdDetails itemId={selectedItem} step={step} />}
          />
          <button
            className={`btn btn-lg btn-block ${isCorrect ? 'btn-primary' : 'btn-secondary'}`}
            onClick={this.nextPage}
          >
            Следующий уровень
          </button>
        </div>
      </ErrorBoundry>
    );
  }
}
