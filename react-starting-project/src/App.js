import React, { useState } from 'react';

import GoalList from './components/goal-list/GoalList';
import NewGoal from './components/new-goal/NewGoal';
import './App.css';

/* 
// JSX syntax

const App = () => {
  // => React.createElement('h1, {title: 'This works'}, ...)
  return <h1 title="this works!">Hi, this is a React Project!</h1>; 
}; 


class App extends React.Component {
  render() { 
    return <h1 title="this works!">Hi, this is a React Project!</h1>; 
  }
}  */

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: 'cg1', text: 'Finish the Course' },
    { id: 'cg2', text: 'Learn all about the Course Main Topic' },
    { id: 'cg3', text: 'Help other students in the Course Q&A' }
  ]);

  const addNewGoalHandler = newGoal => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newGoal));
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;