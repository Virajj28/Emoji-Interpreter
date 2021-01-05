import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🙂": "Slightly Happy",
  "😉": "Winking Face",
  "🥲": "Smiling with tear",
  "🤪": "Zany Face",
  "🤭": "Face with hand over mouth",
  "😎": "Smiling Face with Sunglasses",
  "🤓": "Nerd Face",
  "🤘": "Rock on",
  "🤙": "Homie Sign"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have it in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHamdler(emoji) {
    //processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); //react call to show output
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiInputHandler} />

      <h2>{meaning}</h2>
      <h3>Emojis We Know</h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={
              () => emojiClickHamdler(emoji)
              //Imp got stucked while click fixed later
            }
            style={{ fontSize: "3rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
