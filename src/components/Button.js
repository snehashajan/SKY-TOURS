import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onclick,
  buttonstyle,
  buttonsize
}) => {
  const checkbuttonstyle = STYLES.includes(buttonstyle)
    ? buttonstyle
    : STYLES[0];

  const checkbuttonsize = SIZES.includes(buttonsize) ? buttonsize : SIZES[0];

  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button
        className={`btn ${checkbuttonstyle} ${checkbuttonsize}`}
        onclick={onclick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};


