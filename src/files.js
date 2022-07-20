import {useState} from 'react';

const Ans = () => {
  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);

    console.log('value is:', event.target.value);
  };

  const handleClick = event => {
    event.preventDefault();

    // 👇️ value of input field
    console.log( message);
  };

  return (
    <div>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
        autoComplete="off"
      />

      <h2>Message: {message}</h2>

      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Ans;

