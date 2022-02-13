import { useState } from "react";
import { Description } from "./components/description/Description";
import { SearchWordInputText } from "./components/searchword/SearchWordInputText";
import { WordListElement } from "./components/wordlist/WordListElement";
import "./App.css";

function App() {
  const [searchWord, setSearchWord] = useState('');
  return (
    <div className="App">
      <div className="header">
        <h1 className="caption">Regex Dict</h1>
      </div>
      <div className="contents">
        <div className="nav"><a href="/">TOP</a></div>
        <Description/>
        <SearchWordInputText value={searchWord} onChange={(e) => { setSearchWord(e.target.value) }} />
        <WordListElement searchWord={searchWord}/>
      </div>
      <div className="footer">&copy; 2022 geminos-panjan</div>
    </div>
  );
}

export default App;
