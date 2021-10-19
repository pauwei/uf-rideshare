import { useState } from 'react';
import Filter from './components/Filter';
import List from './components/List';
import Search from './components/Search';
import './App.css';

function App() {

  const [query, setQuery] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="App">
      <Search query={query} setQuery={setQuery}/>
      <div>
        <List query={query} date={date}/>
        <Filter setDate={setDate}/>
      </div>

    </div>
  );
}

export default App;
