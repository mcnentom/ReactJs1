import Card from './components/Card'
import Search from './components/Search'
import {catInfo} from './components/SingleComponent'
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const filteredData = catInfo.filter(item => {
    const foundValue = item.country;
    return foundValue.toLowerCase().includes(search.toLowerCase());
  });
  // console.log(search);
  return (
    <>
      <Search search={search} handleSearch={handleSearch} />
      <Card country='color' catData={filteredData} />
    </>
  )
}

export default App
