import React, { useState, useEffect } from 'react';
import ItemList from '../item-list';
import BirdService from '../../services/dummy-bird-service';

const BirdList = ({ onItemSelected, step }) => {
  const [data, setData] = useState([]);
  const birdService = new BirdService();

  useEffect(() => {
    birdService.getAllBird(step).then(setData);
  });

  return <ItemList onItemSelected={onItemSelected} data={data} />;
};

export { BirdList };
