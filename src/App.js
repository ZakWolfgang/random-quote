import React, { useState } from "react";
import './App.css';

const App = () => {
  const [quotes, setQuotes] = useState('');

  const getQuote = () => {
    fetch ("https://type.fit/api/quotes")
    .then(res => res.json())
    .then(data => {
      let randomNum = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNum]);
    });

    
  }


  return (
    <div className="App">
      {quotes.text}
      <button onClick={getQuote}>Get Quote</button>
    </div>
  );
}

export default App;
