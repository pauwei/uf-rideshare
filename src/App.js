import { useState } from 'react';
import Filter from './components/Filter';
import List from './components/List';
import Search from './components/Search';
import './App.css';

function App() {

  const [query, setQuery] = useState("");
  const [date, setDate] = useState("");
  const [user, setUser] = useState("");
  //City and date have not been updated for the list
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [expire, setExpire] = useState(false);

  return (
    <div className="App">
      <Search query={query} setQuery={setQuery}/>
      <div>
        <List query={query} date={date} user={user} expire={expire} startDate={startDate}/>
        <Filter setDate={setDate} setUser={setUser} city={city} setCity={setCity} startDate={startDate} setStartDate={setStartDate} expire={expire} setExpire={setExpire}/>
      </div>

    </div>
  );
}

export default App;
