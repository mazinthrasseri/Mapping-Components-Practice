import React from "react";

import Entry from "../components/Entry";
import Emojipedia from "../emojipedia.js";

function emojiCard(emoji) {
  return (
    <Entry
      id={emoji.id}
      name={emoji.name}
      emoji={emoji.emoji}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {Emojipedia.map(emojiCard)}
    </div>
  );
}

export default App;
