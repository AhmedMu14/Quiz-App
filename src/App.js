import { useState } from "react";
import "./App.css";
import QuizView from "./components/QuizView";
import ScoreView from "./components/ScoreView";

function App() {
  const questions = [
    {
      question: "How do you import a named export in React?",
      answers: [{ text: "import { Component } from 'react'", isCorrect: true }, { text: "import Component from 'react'" }, { text: "import component from 'react'" }],
    },
    {
      question: "Which of the following is used to pass data to a React component from outside?",
      answers: [
        { text: "setState" },
        { text: " render with arguments"},
        { text: "props" , isCorrect: true },
        { text: "propType" },
      ],
    },
    {
      question: " What method in a React class component is used to update the state?",
      answers: [
        { text: "this.setState" , isCorrect: true},
        { text: "this.updateState" },
        { text: " this.stateChange" },
        { text: " this.modifyState" },
      ],
    },
    {
      question: "Which of the following is the correct syntax to write a functional component in React?",
      answers: [
        { text: "function MyComponent { return <div>Hello World</div> }" },
        { text: "function MyComponent() { return <div>Hello World</div> }", isCorrect: true },
        { text: "function MyComponent => { return <div>Hello World</div> }" },
        { text: "function MyComponent: { return <div>Hello World</div> }" },
      ],
    },
    {
      question: " Which of the following hooks is used to manage state in a functional component?",
      answers: [
        { text: "useEffect" },
        { text: "useContext" },
        { text: "useState", isCorrect: true },
        { text: "useReducer" },
      ],
    },
    {
      question: "What is the purpose of the useEffect hook in React?",
      answers: [
        { text: " To manage state" },
        { text: "To handle side effects", isCorrect: true },
        { text: "To create context" },
        { text: " To define props" },
      ],
    },
    {
      question: "Which lifecycle method is called once, immediately after the initial rendering in a class component?",
      answers: [
        { text: "componentWillMount" },
        { text: "componentDidMount", isCorrect: true },
        { text: "componentWillUpdate" },
        { text: "componentDidUpdate" },
      ],
    },
    {
      question: "How can you optimize performance for a large list of items in React?",
      answers: [
        { text: "Using a regular array map" },
        { text: "Using the List component from 'react-native'"},
        { text: "Using the React.Fragment component" },
        { text: "Using the React.memo or shouldComponentUpdate", isCorrect: true  },
      ],
    },
    {
      question: " What does JSX stand for?",
      answers: [
        { text: "JavaScript Syntax Extension" , isCorrect: true },
        { text: "JavaScript Standard Extension"},
        { text: "JavaScript Syntax XML" },
        { text: "JavaScript Simple XML" },
      ],
    },
    {
      question: "How can you prevent a function from being called multiple times unnecessarily in a React functional component?",
      answers: [
        { text: "Using setState" },
        { text: "Using useEffect"},
        { text: "Using useMemo or useCallback" , isCorrect: true },
        { text: "Using a regular function" },
      ],
    },
    {
      question: "Which of the following is the correct syntax to write a functional component in React?",
      answers: [
        { text: "Virtual DOM", isCorrect: true },
        { text: "Real DOM" },
        { text: "Shadow DOM" },
        { text: " Abstract DOM" },
      ],
    },
    {
      question: "What is the correct way to bind the this keyword inside a constructor?",
      answers: [
        { text: "this.method = this.method.bind(this)" , isCorrect: true},
        { text: "this.method.bind(this)" },
        { text: "this.method = bind(this.method, this)" },
        { text: "bind(this.method, this)" },
      ],
    },
    {
      question: "In React, what is the term for passing data from a parent component to a child component?",
      answers: [
        { text: " State lifting" },
        { text: "Prop drilling", isCorrect: true },
        { text: "Context API" },
        { text: " Component chaining" },
      ],
    },
    {
      question: " Which of the following is a correct way to conditionally render a component in React?",
      answers: [
        { text: "{showComponent ? <Component /> : null}" },
        { text: "{if (showComponent) <Component />}"},
        { text: "{showComponent && <Component />}" },
        { text: "Both A and C" , isCorrect: true },
      ],
    },
    {
      question: "How do you access props in a functional component?",
      answers: [
        { text: "this.props" },
        { text: "props.this" },
        { text: " props", isCorrect: true },
        { text: "state.props" },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    // check score
    if (isCorrect) setScore(score + 1);

    const next = currentQuestion + 1;
    if (next < questions.length) setCurrentQuestion(next);
    else setIsQuizOver(true);
  };

  const handleResetClick = () => {
    // fix: score not resetting
    setScore(0);

    setCurrentQuestion(0);
    setIsQuizOver(false);
  };

  return (
    <div className="App">
      {isQuizOver ? (
        <ScoreView handleResetClick={handleResetClick} score={score} />
      ) : (
        <QuizView
          questions={questions}
          currentQuestion={currentQuestion}
          handleAnswerClick={handleAnswerClick}
        />
      )}
    </div>
  );
}

export default App;
