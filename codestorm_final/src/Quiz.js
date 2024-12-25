import React, { useState, useEffect } from "react";
import "./Quiz.css"; // Importing external CSS file

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [quizId, setQuizId] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // State for loading

  const fetchQuestion = async (category) => {
    setIsLoading(true); // Start loading
    try {
      const authToken = localStorage.getItem("authToken");
      const categoryObj = { category };

      const response = await fetch(
        "http://localhost:5001/api/quiz/getquizzesbycat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": authToken,
          },
          body: JSON.stringify(categoryObj),
        }
      );

      if (!response.ok) {
        alert("Failed to fetch quizzes. Please try again.");
        return; // Exit if there's an error
      }

      const data = await response.json();
      console.log("Fetched data:", data);

      if (Array.isArray(data) && data.length > 0) {
        const quiz = data[0];
        setQuizId(quiz._id);
        setQuestions(quiz.questions);
        setSelectedOption(null);
        setScore(0);
        setCurrentQuestionIndex(0);
        setShowResults(false);
        setOptions(quiz.questions[0].options || []);
        setCorrectAnswers(quiz.questions.map((q) => q.correctAnswer));
      } else {
        alert("No more quizzes available in this category.");
      }
    } catch (error) {
      console.error("Error fetching question:", error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const category = e.target.value;
    await fetchQuestion(category);
  };

  const handleNextQuestion = () => {
    if (selectedOption) {
      if (selectedOption === questions[currentQuestionIndex]?.correctAnswer) {
        setScore((prevScore) => prevScore + 1);
      }

      if (currentQuestionIndex < questions.length - 1) {
        const nextIndex = currentQuestionIndex + 1;
        setCurrentQuestionIndex(nextIndex);
        setSelectedOption(null);
        setOptions(questions[nextIndex]?.options || []); // Set options for the next question
      } else {
        setShowResults(true); // Show results if quiz is completed
      }
    }
  };

  const handleFinishQuiz = async () => {
    const authToken = localStorage.getItem("authToken");
    try {
      const response = await fetch(
        "http://localhost:5001/api/quiz/updatequizscores",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": authToken,
          },
          body: JSON.stringify({ quizId, score }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update quiz scores.");
      }

      const result = await response.json();
      console.log(result); // Handle result if needed
    } catch (error) {
      console.error("Error updating quiz score:", error);
    }
  };

  return (
    <div className="quiz-container">
      <div className="category-buttons">
        <button onClick={handleClick} value="Saving">
          Savings
        </button>
        <button onClick={handleClick} value="Investing">
          Investment
        </button>
        <button onClick={handleClick} value="Credit">
          Credit
        </button>
        <button onClick={handleClick} value="Personal Finance">
          Personal Finance
        </button>
      </div>

      {!showResults ? (
        <div className="quiz-card">
          <h3 className="quiz-header">Quizzes</h3>
          <hr />
          {isLoading ? (
            <p className="loading-text">Loading questions...</p> // Show loading message
          ) : questions.length > 0 ? (
            <>
              <h3>{questions[currentQuestionIndex]?.question}</h3>
              <div className="question-card">
                <form>
                  {options.map((option, index) => (
                    <div key={index} className="option">
                      <label>
                        <input
                          type="radio"
                          name="option"
                          value={option}
                          checked={selectedOption === option}
                          onChange={() => setSelectedOption(option)}
                        />
                        {option}
                      </label>
                    </div>
                  ))}
                </form>
              </div>
              <div className="next-button-container">
                <button onClick={handleNextQuestion}>
                  {currentQuestionIndex < questions.length - 1
                    ? "Next"
                    : "Finish"}
                </button>
              </div>
            </>
          ) : (
            <p>No questions available. Please select a category.</p> // Fallback message when no questions are available
          )}
        </div>
      ) : (
        <div className="result-card">
          <h2>Your Score: {score} / {questions.length}</h2>
          <h3>Correct Answers:</h3>
          <ul>
            {questions.map((question, index) => (
              <li key={index}>
                {question.question} - Correct Answer: {correctAnswers[index]}
              </li>
            ))}
          </ul>
          <button onClick={handleFinishQuiz}>Update Score</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
