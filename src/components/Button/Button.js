import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ label, onClick, variant = 'primary', disabled = false }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

// PropTypes to define expected props
Button.propTypes = {
  label: PropTypes.string.isRequired, // Text to display on the button
  onClick: PropTypes.func,           // Function to call on button click
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']), // Style variant
  disabled: PropTypes.bool,          // Disable the button
};

// Default props
Button.defaultProps = {
  onClick: () => {},
  variant: 'primary',
  disabled: false,
};

export default Button;
