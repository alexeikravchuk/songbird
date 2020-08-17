import React from 'react';
import PropTypes from 'prop-types';

import './row.css';

const Row = ({ left, right }) => {
  return (
    <div className="row mb2">
      <div className="col-md-3">{left}</div>
      <div className="col-md-9">{right}</div>
    </div>
  );
};

Row.propTypes = {
  left: PropTypes.node.isRequired,
  right: PropTypes.node.isRequired,
};

export default Row;
