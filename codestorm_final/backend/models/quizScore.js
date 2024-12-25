const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define Quiz Score Schema
const quizScoreSchema = new Schema({
  quizId: {
    type: Schema.Types.ObjectId,
    ref: "Quiz", // Assuming there's a separate Quiz model
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create the QuizScore model
const QuizScore = mongoose.model("QuizScore", quizScoreSchema);

module.exports = { QuizScore, quizScoreSchema };
