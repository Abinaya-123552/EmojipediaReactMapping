import React from "react";
function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emojis}
        </span>
        <span>{props.names}</span>
      </dt>
      <dd>{props.description}</dd>
    </div>
  );
}

export default Entry;
