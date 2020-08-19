import React, { Component } from 'react';

import Header from '../header';
import ErrorBoundry from '../error-boundry';
import RandomBird from '../random-bird';
import BirdService from '../../services/dummy-bird-service';
import { BirdDetails, BirdList } from '../sb-components';
import Row from '../row';

import './app.css';
import { GameResult } from '../game-result/game-result';

export default class App extends Component {
  birdService = new BirdService();

  state = {
    step: 0,
    stepData: [],
    id: 1,
    isCorrect: false,
    win: false,
    score: 0,
    selectedItem: null,
  };

  componentDidMount = () => {
    this.setStepData(0);
  };

  setStepData = async (step) => {
    const data = await this.birdService.getAllBird(step);
    const stepData = data.map((bird) => ({ ...bird, isCorrect: undefined }));
    const id = Math.floor(Math.random() * 6) + 1;
    this.setState({ stepData, id, step });
  };

  onItemSelected = (id) => {
    const { isCorrect, stepData, score } = this.state;

    this.setState(({ id: currentId }) => {
      if (isCorrect) return { selectedItem: id };

      const isMatch = currentId === id;
      const newScore = isMatch ? score + this.getPoints(stepData) : score;
      const newData = [...stepData];
      newData[id - 1].isCorrect = isMatch;
      this.playSound(isMatch);

      return {
        selectedItem: id,
        id: isMatch ? id : currentId,
        isCorrect: isMatch,
        stepData: newData,
        score: newScore,
      };
    });
  };

  getPoints = (stepData) => {
    return stepData.filter(({ isCorrect }) => isCorrect === undefined).length - 1;
  };

  playSound = (isCorrect) => {
    const correctUrl = './sound/correct.mp3';
    const errorUrl = './sound/error.mp3';
    if (isCorrect) {
      return new Audio(correctUrl).play().catch(() => null);
    }
    return new Audio(errorUrl).play().catch(() => null);
  };

  nextPage = () => {
    const { isCorrect } = this.state;
    if (isCorrect) {
      this.setState(({ step }) => {
        if (step === 5) return { win: true };
        this.setStepData(step + 1);
        return {
          step: step + 1,
          isCorrect: false,
          selectedItem: null,
        };
      });
    }
  };

  resetGame = () => {
    this.birdService = new BirdService();
    this.setStepData(0);
    this.setState({ isCorrect: false, win: false, score: 0, selectedItem: null });
  };

  render() {
    const { step, stepData, score, id, selectedItem, isCorrect, win } = this.state;

    if (win) {
      return <GameResult score={score} resetGame={this.resetGame} />;
    }

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header score={score} step={step} />
          <RandomBird step={step} id={id} isCorrect={isCorrect} />
          <Row
            left={<BirdList onItemSelected={this.onItemSelected} data={stepData} />}
            right={<BirdDetails itemId={selectedItem} step={step} />}
          />
          <button
            className={`btn btn-lg btn-block ${isCorrect ? 'btn-success' : 'btn-secondary'}`}
            onClick={this.nextPage}
          >
            Дальше
          </button>
        </div>
      </ErrorBoundry>
    );
  }
}
