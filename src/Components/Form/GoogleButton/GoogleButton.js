import React from 'react';
import styles from './GoogleButton.module.css';
import sprite from 'Images/InlineSprite.svg';
import PropTypes from 'prop-types';

const GoogleButton = ({ handleLogin }) => {

  return (
    <button
      className={styles.google_btn}
      onClick={handleLogin}
    >
      <svg className={styles.icon_google}>
        <use xlinkHref={`${sprite}#google`} />
      </svg>
       Sign in with Google
    </button>
  );
};

GoogleButton.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default GoogleButton;