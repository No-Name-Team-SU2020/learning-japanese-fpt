import React from 'react';
import './Backdrop.css';

const Backdrop = ({ clicked, show }) => (<div className={['custom-backdrop', show ? 'show' : ''].join(' ')} onClick={clicked} />);

export default Backdrop;