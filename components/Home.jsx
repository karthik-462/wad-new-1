import { useState } from 'react';

function Home() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 100));
  };

  return (
    <div className="text-center">
      <h2>Random Number Generator</h2>
      <button className="btn btn-primary my-3" onClick={generateNumber}>
        Generate Number
      </button>
      {randomNumber !== null && (
        <h3>Random Number: {randomNumber}</h3>
      )}
    </div>
  );
}

export default Home;
