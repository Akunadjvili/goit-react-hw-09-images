import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button({ onClick, children }) {
  return (
    <button className={styles.Button} onClick={onClick} type="button">
      {children}
    </button>
  );
}

Button.defaultProps = { onClick: () => {} };
Button.propTypes = { onClick: PropTypes.func };
