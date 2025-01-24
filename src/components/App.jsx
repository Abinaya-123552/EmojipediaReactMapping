import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
function create(emojipedia) {
  return (
    <Entry
      emojis={emojipedia.emoji}
      names={emojipedia.name}
      description={emojipedia.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(create)}</dl>
    </div>
  );
}

export default App;
