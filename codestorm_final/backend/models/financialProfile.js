const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define Investment Subschema
const investmentSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

// Define Financial Goal Subschema
const financialGoalSchema = new Schema({
  goal: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  progress: {
    type: Number,
    default: 0, // Initial progress towards the goal
  },
});

// Define Financial Profile Schema
const financialProfileSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  monthlyIncome: {
    type: Number,
    required: true,
  },
  expenses: {
    type: Number,
    required: true,
  },
  savings: {
    type: Number,
    required: true,
  },
  investments: [investmentSchema], // Array of investments using the subschema
  financialGoals: [financialGoalSchema], // Array of financial goals using the subschema
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the FinancialProfile model
const FinancialProfile = mongoose.model(
  "FinancialProfile",
  financialProfileSchema
);

module.exports = FinancialProfile;
