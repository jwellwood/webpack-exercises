import React from 'react';
import logo from '../content/logo.png';

const MyLogo: React.FC = () => {
  return (
    <div className='react-logo'>
      <img src={logo} alt='logo' />
    </div>
  );
};
export default MyLogo;
