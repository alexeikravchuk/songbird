import React, { Component } from 'react';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import BirdService from '../../services/dummy-bird-service';

import './random-bird.scss';

export default class RandomBird extends Component {
  birdService = new BirdService();

  state = {
    bird: {},
    loading: true,
  };

  componentDidMount() {
    this.updateBird();
  }

  onBirdLoaded = (bird) => {
    this.setState({
      bird,
      loading: false,
      error: false,
    });
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updateBird = () => {
    const { step, id } = this.props;
    this.birdService.getBird(step, id).then(this.onBirdLoaded).catch(this.onError);
  };

  render() {
    const { bird, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <BirdView bird={bird} /> : null;

    return (
      <div className="random-bird jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const BirdView = ({ bird }) => {
  const { name, image, audio } = bird;

  return (
    <>
      <img className="bird-image" src={image} alt="bird" />
      <div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h3>{name}</h3>
          </li>
          <li className="list-group-item">
            <AudioPlayer control={false} src={audio} />
          </li>
        </ul>
      </div>
    </>
  );
};
