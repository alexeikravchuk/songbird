import React from 'react';

import './item-list.scss';

const ItemList = ({ data, onItemSelected }) => {
  const items = data.map(({ id, name, isCorrect }) => {
    const extraClass = isCorrect !== undefined && (isCorrect ? 'correct' : 'error');
    return (
      <li className="list-group-item" key={id}>
        <div onClick={() => onItemSelected(id)}>
          <span className={`marker ${extraClass || ''}`} />
          <span>{name}</span>
        </div>
      </li>
    );
  });

  return <ul className="item-list list-group">{items}</ul>;
};

export default ItemList;
