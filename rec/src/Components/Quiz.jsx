import React, { useState } from "react";

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [quizover, setQuizover] = useState(false);

 const Questions = [
  {
    ques: "What is my name ??",
    options: ["Donald Trump", "Joe Biden", "SarveshSusi", "Elon Musk"],
    answer: "SarveshSusi",
  },
  {
    ques: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    ques: "What is my favorite color?",
    options: ["Red", "Blue", "Green", "Black"],
    answer: "Blue", // Replace with your actual favorite color
  },
  {
    ques: "What is my dream job?",
    options: ["Software Developer", "Doctor", "Artist", "Entrepreneur"],
    answer: "Entrepreneur", // Replace with your actual dream job
  },
  {
    ques: "Which sport do I enjoy watching the most?",
    options: ["Cricket", "Football", "Basketball", "Tennis"],
    answer: "Football", // Replace with your preferred sport
  },
  {
    ques: "What is the most important thing in life?",
    options: [
      "Happiness",
      "Money",
      "Family",
      "Success",
    ],
    answer: "Happiness", // Choose the one you value the most
  },
  {
    ques: "How many hours do I usually sleep every night?",
    options: ["4-5 hours", "6-7 hours", "8-9 hours", "10+ hours"],
    answer: "6-7 hours", // Replace with your typical sleep pattern
  },
  {
    ques: "What is my favorite type of music?",
    options: ["Pop", "Rock", "Classical", "Jazz"],
    answer: "Rock", // Replace with your favorite genre
  },
  {
    ques: "What is my favorite hobby?",
    options: ["Reading", "Coding", "Traveling", "Gaming"],
    answer: "Coding", // Replace with your actual hobby
  },
  {
    ques: "What do I value the most in a friend?",
    options: [
      "Honesty",
      "Sense of humor",
      "Loyalty",
      "Kindness",
    ],
    answer: "Loyalty", // Replace with your choice
  },
];


  const handleAnswer = (q) => {
    setSelected(q);
  };

  const handleCheckAns = () => {
    if (selected) {
      if (selected === Questions[current].answer) {
        setScore(score + 1);
      }
      setSelected(null);
      if (current + 1 < Questions.length) {
        setCurrent(current + 1);
      } else {
        setQuizover(true);
      }
    } else {
      alert("Please select an answer");
    }
  };

  return (<>
    <h3 className="text-[30px] font-thin">Quiz App:[useState , List Rendering , Condition Checking]</h3>
    <div className="min-h-screen flex items-center justify-center bg-slate-100 text-white font-sans">
    
      
      {!quizover ? (
        <div className="w-full max-w-xl p-6 bg-slate-900 rounded-lg shadow-md animate-fadeIn">
          <h1 className="text-2xl font-bold mb-4 animate-pulse">
            {Questions[current].ques}
          </h1>
          <div className="space-y-4">
            {Questions[current].options.map((q, i) => (
              <div
                key={i}
                className={`p-2 border rounded-lg cursor-pointer hover:bg-blue-500 transition ${
                  selected === q ? "bg-blue-700" : "bg-gray-700"
                }`}
                onClick={() => handleAnswer(q)}
              >
                <input
                  type="radio"
                  id={q}
                  name="option"
                  checked={selected === q}
                  className="hidden"
                  onChange={() => {}}
                />
                <label htmlFor={q} className="cursor-pointer">
                  {q}
                </label>
              </div>
            ))}
          </div>
          <button
            onClick={handleCheckAns}
            className="mt-4 w-full py-2 bg-green-600 rounded-lg hover:bg-green-700 transition text-lg font-semibold animate-bounce"
          >
            {current + 1 < Questions.length ? "Next" : "Finish & Check Score"}
          </button>
        </div>
      ) : (
        <div className="text-center animate-fadeIn">
          <h1 className="text-4xl font-bold mb-4 text-green-400">
            Quiz Over!
          </h1>
          <p className="text-2xl text-orange-500">Your Score: {score}</p>
          <button
            onClick={() => {
              setCurrent(0);
              setScore(0);
              setQuizover(false);
            }}
            className="mt-6 py-2 px-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-lg font-semibold"
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div></>
  );
}

export default Quiz;
