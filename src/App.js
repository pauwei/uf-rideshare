import { useState } from "react";
import Filter from "./components/Filter";
import List from "./components/List";
import Search from "./components/Search";
import "./App.css";
import logo from "./logo.png";
import Logo from "./components/Logo";

function App() {
  const [query, setQuery] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="App">
      <div class="alignleft">
        <Logo />
      </div>
      <Search query={query} setQuery={setQuery} />
      <div>
        <List query={query} date={date} />
        <Filter setDate={setDate} />
      </div>
    </div>
  );
}

export default App;
