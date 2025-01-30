import { useState } from "react";
import "./App.css";
const quotes: string[] = [
  "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
  "The best way to predict the future is to invent it.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "Do what you can, with what you have, where you are.",
];

const App = () => {
  const [index, setIndex] = useState<number>(
    Math.floor(Math.random() * quotes.length)
  );

  const getRandomQuote = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === index);
    setIndex(newIndex);
  };

  return (
    <div>
      <p>ADVICE #{index + 1}</p>
      <p>"{quotes[index]}"</p>
      <span></span>
      <button onClick={getRandomQuote}>🎲</button>
    </div>
  );
};

export default App;
