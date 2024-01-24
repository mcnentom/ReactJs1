import { useState, useEffect} from 'react'
import axios from 'axios'
import './styling.scss'

const App = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const myData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const jsonData = await response.json();
        const limitedData = jsonData.slice(0, 20);
        
        setInfo(limitedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    myData();
  }, []);

  return (
    <div className='general-div'>
      <ul className='dataMapped'>
        {info.map(myData => (
          <li key={myData.id}>
            <img src={myData.thumbnailUrl}  />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App