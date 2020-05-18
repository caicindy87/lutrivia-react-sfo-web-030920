import React from "react";

export default function Question({ question }) {
  return (
    <div>
      <p>{question.text}</p>
      <p>{question.answer ? "true" : "false"}</p>
    </div>
  );
}
