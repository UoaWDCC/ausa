// typescript code
// button: design, props(title, disabled)
// https://react.dev/learn/typescript

import React from 'react';

const Welcome = () => {
  return <h1>Hello, Eve!</h1>;
}

const Button = () => {
  return (
    <button>
      I am a button.
    </button>
  );
}

function MyButton() {
  return (
    <div>
      <h1>I am Eve.</h1>
      <Button />
    </div>
  )
}
export default MyButton;

