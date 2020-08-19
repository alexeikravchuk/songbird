import React, { Component, useRef } from 'react';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import defaultImg from '../../../public/assets/img/default-bird.jpg';

import './random-bird.scss';

export default class RandomBird extends Component {
  state = {
    bird: null,
    loading: true,
  };

  componentDidMount() {
    this.updateBird();
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id || this.props.step !== prevProps.step) {
      this.updateBird();
    }
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
    const { step, id, birdService } = this.props;
    birdService.getBird(step, id).then(this.onBirdLoaded).catch(this.onError);
  };

  render() {
    const { bird, loading, error } = this.state;
    const { isCorrect } = this.props;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <BirdView bird={bird} isCorrect={isCorrect} /> : null;

    return (
      <div className="random-bird jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const BirdView = ({ bird, isCorrect }) => {
  const { name, image, audio } = bird;
  const player = useRef(null);

  if (isCorrect) player.current.audio.current.pause();

  return (
    <>
      <img className="bird-image" src={isCorrect ? image : defaultImg} alt="bird" />
      <div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h3>{isCorrect ? name : '******'}</h3>
          </li>
          <li className="list-group-item">
            <AudioPlayer
              ref={player}
              autoPlay={false}
              autoPlayAfterSrcChange={false}
              control={false}
              src={audio}
            />
          </li>
        </ul>
      </div>
    </>
  );
};
