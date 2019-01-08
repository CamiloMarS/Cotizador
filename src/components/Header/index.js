import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  return (
    <header className="top">
      <h2>{props.title}</h2>
      <p># cotizados {props.cotizados}</p>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  cotizados: PropTypes.number.isRequired
}

export default Header;
