import logo from './logo.svg';
import './App.css';
import SearchResults from './components/SearchResults';
import SearchBar from './components/SearchBar';
import { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [offset, setOffSet] = useState(0);

  async function fetchData() {
    const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${searchQuery}https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${searchQuery}&sroffset=${offset}`);
    const data = await response.json();
    setSearchResults(data.query.search);

  }

  return (
    <div className="App">
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        fetchData={fetchData}
        setOffSet={setOffSet}
        offset={offset}
      />
      <SearchResults
        searchResults={searchResults}
      />
      <button onClick={() => setOffSet(offset - 10)}>Previous</button>
      <button onClick={() => setOffSet(offset + 10)}>Next</button>




    </div>
  );
}

export default App;