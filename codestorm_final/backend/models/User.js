const mongoose = require("mongoose");
const { Schema } = mongoose;
const { quizScoreSchema } = require('./quizScore');  // Importing quizScoreSchema

// Define User Schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  financialLiteracyLevel: {
    type: String,
    enum: [
      "Well Literate",
      "Sufficient Literate",
      "Less Literate",
      "Not Literate",
    ],
    default: "Not Literate",
  },
  profileCompletion: {
    type: Number,
    default: 0,
  },
  quizScores: [quizScoreSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  completedQuizzes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Quiz" }],
});

// Add a pre-save hook to update the 'updatedAt' field automatically
userSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});


const User = mongoose.model("User", userSchema);
module.exports = User;
