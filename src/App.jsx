import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [mydata, setMyData] = useState(null);
  const [username, setUserName] = useState('');
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    const myToken = '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';
    
    const fetchMyData = async () => {
      if (username) {
        const url = `https://api.github.com/users/${username}`;
        try {
          const fetchData = await fetch(url, {
            headers: {
              'Authorization': `Bearer ${myToken}`,
              'X-GitHub-Api-version': '2022-11-28'
            }
          });
          if (!fetchData.ok) {
            throw new Error(`HTTP error! Status: ${fetchData.status}`);
          }
          const response = await fetchData.json();
          setMyData(response);
          setFetched(true);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      }
    };

    if (!fetched) {
      fetchMyData();
    }
  }, [fetched, username]);

  const handleSearch = () => {
    setFetched(false);
  };

  return (
    <div className='general-div'>
      <span>
      <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleSearch}>Click</button>
      </span>
      {mydata && (
        <div key={mydata.id}className='fetched'>
          <img src={mydata.avatar_url} alt="my avatar" />
          <p>{mydata.login}</p>
          <p>{mydata.description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
