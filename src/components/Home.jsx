import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [randomNumber, setRandomNumber] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  const generateNumber = () => {
    const newNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newNumber);
  };

  return (
    <div className="text-center">
      <h2>Random Number Generator</h2>
      <div className="my-4">
        {randomNumber && <h3>Generated Number: {randomNumber}</h3>}
      </div>
      <button className="btn btn-primary" onClick={generateNumber}>
        Generate Number
      </button>
    </div>
  );
}

export default Home;
