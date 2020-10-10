import React from 'react';
import ItemList from '../item-list';

const BirdList = ({ onItemSelected, data }) => {
  return <ItemList onItemSelected={onItemSelected} data={data} />;
};

export { BirdList };
