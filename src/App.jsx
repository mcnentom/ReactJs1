import { useState } from 'react';

function App() {
  const [percentage, setPercentage] = useState('');

  function handleInputChange(event) {
    const inputValue = event.target.value;
    if (inputValue >= 0 && inputValue <= 100) {
      setPercentage(inputValue);
    } else {
      setPercentage('');
    }
  }

  const progress = percentage !== '' ? parseInt(percentage) : 0;

  const progressBarStyle = {
    width: '20rem',
    height: '30px',
    border: '1px solid #ccc',
    borderRadius: '14px',
    overflow: 'hidden',
    position: 'relative', 
  };

  const progressFillStyle = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: '#007bff',
    borderRadius: '15px',
    transition: 'width 1s ease-in-out',
    position: 'absolute', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  };

  const myInput = {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '10px',
  };
  const general = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backdropFilters: 'saturate(300%)'
  };
  const inputStyles = {
    height: '25px',
    width: '45px',
    padding: '5px',
    borderRadius: '14px',
  };
  const pTag = {
    fontSize: '1.5rem',
  };

  return (
    <div style={general}>
      <h1>Progress Bar</h1>
      <div style={progressBarStyle}>
        <div style={progressFillStyle}>{percentage !== '' ? `${progress}%` : ''}</div>
      </div>

      <br />
      <div style={myInput}>
        <p style={pTag}>Input percentage:</p>
        <input type="number" value={percentage} onChange={handleInputChange} style={inputStyles} />
      </div>
    </div>
  );
}

export default App;
