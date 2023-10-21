import React, { useState } from 'react';

const questions = [
  {
    question: 'Which of the following file extensions represents a video file?',
    options: ['.docx', '.avi', '.mp3', '.jpg'],
    correctAnswer: '.avi',
  },
  {
    question: 'Which of the following is a programming language?',
    options: ['Microsoft Word', 'Python', 'Adobe Photoshop', ' Microsoft Excel'],
    correctAnswer: 'Python',
  },
  {
    question: 'Which of the following is an input device?',
    options: ['Speaker', 'Keyboard', 'Monitor', 'Printer'],
    correctAnswer: 'Keyboard',
  },
  // Add more questions and options
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {showResult ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold">Quiz Results</h2>
          <p className="text-lg mt-4">Your score: {score} out of {questions.length}</p>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold">{questions[currentQuestion].question}</h2>
          <div className="mt-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="bg-gray-200 hover:bg-gray-300 rounded p-2 m-2"
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
