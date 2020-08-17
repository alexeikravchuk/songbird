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
      <img className="bird-image" src={image} alt="bird" />
      <div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h4>{name}</h4>
          </li>
          <li className="list-group-item">
            <span>{species}</span>
          </li>
          <li className="list-group-item">
            <AudioPlayer control={false} src={audio} />
          </li>
          <li className="list-group-item">
            <p>{description}</p>
          </li>
        </ul>
      </div>
    </>
  );
};
