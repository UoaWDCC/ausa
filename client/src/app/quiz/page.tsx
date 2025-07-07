"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const quizQuestion = [
  {
    question: "How are you feeling today?",
    options: ["Great", "Nice", "Not good"]
  }, 
  {
    question: "Do you need help?",
    options: ["Yes", "Maybe", "No"]
  }
]

const Quiz = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  }
  
  const handleNext = () => {
    if (selectedOption){
      setSelectedOption(null);

      if(currentQuestion < quizQuestion.length - 1){
        setCurrentQuestion(currentQuestion + 1);
      } else{
        setQuizFinished(true);
      }
    } else{
      alert("Select an option before continuing");
    }
  };

const handleRestart = () => {
  setQuizStarted(false);
  setQuizFinished(false);
  setCurrentQuestion(0);
}

  return (
    <div className="mt-20 px-6 py-12 max-w-3xl mx-auto bg-[#FAF7F2] text-[#2D3B4E]">
      {/* Start Screen */}
      {!quizStarted && !quizFinished && (
        <>
          <h1 className="text-2xl font-bold mb-6">Support Quiz</h1>
          <p className="mb-10">
            Answer a few quick questions so we can guide you to the right resources.
          </p>

          <Button variant="default" size="lg" onClick={() => setQuizStarted(true)}>
            Start!
          </Button>
        </>
      )}

      {/* Quiz Screen */}
      {quizStarted && !quizFinished && (
        <>
          <h1 className = "text-2xl font-bold mb-6">Support Quiz</h1>
          <p className = "mb-6">{quizQuestion[currentQuestion].question}</p>
          <div className = "flex flex-col gap-3 mb-10">
            {quizQuestion[currentQuestion].options?.map((option) => (
              <button 
                key = {option}
                onClick = {() => handleOptionClick(option)}
                className = {`p-2 rounded border 
                  ${selectedOption == option ? "bg-stone-700 text-white" : "bg-white text-[#2D3B4E] hover:bg-gray-100"}
                  transition`}
                  >
                    {option}
                  </button>
            ))}
          </div>
          <Button variant="default" size="lg" onClick={handleNext}>
            {currentQuestion < quizQuestion.length - 1 ? "Next" : "Finish"}
          </Button>
        </>
      )}

      {/* Quiz Ended */}
      {quizFinished && (
        <>
          <h1 className = "text-2xl font-bold mb-6">Congratulations!</h1>
          <p className = "mb-10">You've finished the quiz.</p>
          <Button variant="default" size="lg" onClick={handleRestart}>
            Restart Quiz
          </Button>
        </>
      )}
    </div>    
  );
};

export default Quiz;
