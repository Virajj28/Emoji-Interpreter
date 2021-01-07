import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🙂": "Slightly Happy",
  "😉": "Winking Face",
  "🥰": "Smiling with hearts",
  "🤪": "Zany Face",
  "🤭": "Face with hand over mouth",
  "😎": "Smiling Face with Sunglasses",
  "🤓": "Nerd Face",
  "🤘": "Rock on",
  "🤙": "Homie Sign",
  "💕": "Two hearts",
  "🧆": "Falafel",
  "🧁": "Fairy Cake",
  "💆‍♂️": "Man getting a head message",
  "💫": "Dizzy",
  "🌀": "Cyclone",
  "🧙": "Wizard",
  "🦖": "T-Rex",
  "⚗️": "Alembic",
  "🍻": "Cheers",
  "💢": "Anger Sign (Vein Pop)"
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
      <h1>
        <span style={{ color: "#5A0056" }}> Emoji</span> Interpreter
      </h1>
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
            style={{ fontSize: "5rem", padding: "1rem", cursor: "pointer" }}
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
