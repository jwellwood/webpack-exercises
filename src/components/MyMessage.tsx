import React from 'react';
import PropTypes from 'prop-types';

const MyMessage: React.FC<{ message: string }> = ({ message }) => {
  return <div className='react-header'>{message}</div>;
};

MyMessage.propTypes = {
  message: PropTypes.string,
};

export default MyMessage;
