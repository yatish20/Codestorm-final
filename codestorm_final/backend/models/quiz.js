const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define Question Subschema
const questionSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String], // Array of string options
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
});

// Define Quiz Schema
const quizSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  questions: [questionSchema], // Array of questions with the question schema
  category: {
    type: String,
    enum: [
      "Saving",
      "Investing",
      "Credit",
      "Personal Finance",
      "Debt Management",
      "Insurance",
      "Risk Management",
    ],
    required: true,
  },
  difficulty: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced", "Pro"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Quiz model
const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
