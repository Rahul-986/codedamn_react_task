import React, { useState } from "react";
import './index.css';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const questionsAnswers = [
    { question: "Question 1", answer: "Answer 1" },
    { question: "Question 2", answer: "Answer 2" },
    { question: "Question 3", answer: "Answer 3" },
    { question: "Question 4", answer: "Answer 4" },
  ];

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="w-1/2 mx-auto mt-8 border rounded-lg shadow-lg">
      {questionsAnswers.map((item, index) => (
        <div className="accordion" key={index}>
          <div
            className="question bg-gray-200 p-4 cursor-pointer font-bold"
            onClick={() => handleToggle(index)}
          >
            {item.question}
          </div>
          {activeIndex === index && (
            <div className="answer bg-white p-4 border-t">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
