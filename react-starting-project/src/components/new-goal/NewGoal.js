import React, { useState } from "react";

const NewGoal = (props) => {

  const [enteredText, setEnteredText] = useState("");

  // Handling Events
  const addGoalHandler = (event) => {

    // React uses synthetic events to handle events from button, input and form elements. 
    // A synthetic event is a shell around the native DOM event with additional information for React.
    // So to prevent React from refreshing the page whenever an event is triggered, we need to use preventDefault()
    event.preventDefault();

    const newGoal = { id: Math.random().toString(), text: enteredText };

    setEnteredText("");

    props.onAddGoal(newGoal);
  };
  

  // Fetching User Input (Two-way Binding)
  const textChangedHandler = (event) => {
    setEnteredText(event.target.value);
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" onChange={textChangedHandler} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
