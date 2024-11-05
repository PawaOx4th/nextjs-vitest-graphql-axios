"use client";

import React from "react";

type Props = {};

function AboutPage({}: Props) {
  const [state, setState] = React.useState<string[]>([]);

  const itemCount = state.length;

  return (
    <div>
      <h1>About</h1>
      <hr />
      <button
        onClick={() => {
          setState((prev) => {
            return [...prev, Math.random().toString(32).slice(2)];
          });
        }}
      >
        Add
      </button>
      <hr />
      <h2>item count : {itemCount}</h2>
      <ul>
        {state.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default AboutPage;
