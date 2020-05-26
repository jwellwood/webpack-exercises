import React from 'react';
import MyLogo from './MyLogo';
import MyMessage from './MyMessage';
import { hot } from 'react-hot-loader/root';

const message = "Hello World! I'm React!";

const App = () => {
  console.log(`We are in: ${process.env.NODE_ENV}`);
  // console.log(`Api base: ${process.env.API_BASE}`); // add API_BASE in dev.env and prod.env files
  return (
    <div>
      <MyMessage message={message} />
      <MyLogo />
    </div>
  );
};

export default hot(App);
