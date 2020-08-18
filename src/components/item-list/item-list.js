import React from 'react';
import PropTypes from 'prop-types';

import './item-list.scss';

const ItemList = ({ data, onItemSelected }) => {
  const items = data.map(({ id, name, isCorrect }) => {
    const extraClass = isCorrect !== undefined && (isCorrect ? 'correct' : 'error');
    return (
      <li className="list-group-item" key={id} onClick={() => onItemSelected(id)}>
        <span className={`marker ${extraClass || ''}`} />
        <span>{name}</span>
      </li>
    );
  });

  return <ul className="item-list list-group">{items}</ul>;
};

ItemList.defaultProps = {
  onItemSelected: () => {},
  data: [{ id: 0, name: null }],
};

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object),
};

export default ItemList;
