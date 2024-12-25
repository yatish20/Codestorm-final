const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define Educational Resource Schema
const educationalResourceSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: [
      "Investing",
      "Saving",
      "Debt Management",
      "Risk Management",
      "Insurance",
      "Personal Finance",
    ],
    required: true,
  },
  type: {
    type: String,
    enum: ["Article", "Video", "Podcast", "Ebook"],
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishedAt: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
  article_url: {
    type: String, // URL to store article links
    required: false,
  },
});

// Create the EducationalResource model
const EducationalResource = mongoose.model(
  "EducationalResource",
  educationalResourceSchema
);

module.exports = EducationalResource;
