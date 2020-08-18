import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import BirdService from '../../services/dummy-bird-service';
import ErrorIndicator from '../error-indicator';

import './bird-details.scss';

export default ({ itemId, step }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const birdService = new BirdService();
  birdService
    .getBird(step, itemId)
    .then(setData)
    .catch(() => setError(true));

  const hasData = !!data;
  const errorMessage = error ? <ErrorIndicator /> : null;
  const noDataInfo = (
    <>
      <p>Послушайте плеер.</p>
      <p> Выберите птицу из списка</p>
    </>
  );
  const content = hasData ? <BirdView bird={data} /> : noDataInfo;

  return (
    <div className="card bird-details">
      {errorMessage}
      {content}
    </div>
  );
};

const BirdView = ({ bird }) => {
  const { name, species, image, description, audio } = bird;

  return (
    <>
      <div className="card-body row">
        <img className="bird-image col-sm-4" src={image} alt="bird" />
        <ul className="list-group list-group-flush col-sm-8">
          <li className="list-group-item">
            <h4 className="card-title">{name}</h4>
          </li>
          <li className="list-group-item">
            <span>{species}</span>
          </li>
          <li className="list-group-item">
            <AudioPlayer autoPlay={false} autoPlayAfterSrcChange={false} src={audio} />
          </li>
        </ul>
      </div>

      <p className="card-text">{description}</p>
    </>
  );
};
