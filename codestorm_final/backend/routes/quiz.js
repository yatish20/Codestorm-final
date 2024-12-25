const express = require("express");
const Quiz = require("../models/Quiz");
const router = express.Router();
const getUser = require("../middleware/getUser"); // Import the getUser middleware
const User = require("../models/User"); // Assuming User model is in models directory


//ROUTE1- To add quizes
router.post("/insertquiz", async (req, res) => {
  const quizDataArray = req.body; // Expecting an array of quiz objeect

  try {
    // Validate input
    if (!Array.isArray(quizDataArray)) {
      return res
        .status(400)
        .json({ message: "Input should be an array of quiz objects" });
    }

    // Insert multiple quizzes
    const newQuizzes = await Quiz.insertMany(quizDataArray);
    res
      .status(201)
      .json({ message: "Quizzes inserted successfully", quizzes: newQuizzes });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error inserting quizzes", error: error.message });
  }
});

// ROUTE2 - Get quizzes based on user's financial literacy level
router.get("/getquizzesbydiff", getUser, async (req, res) => {
  // Map financialLiteracyLevel to quiz difficulty
  const mapLiteracyLevelToDifficulty = {
    "Well Literate": "Pro",
    "Sufficient Literate": "Advanced",
    "Less Literate": "Intermediate",
    "Not Literate": "Beginner",
  };
  try {
    const user = await User.findById(req.user.id).select("-passwordHash"); // Exclude password hash

    const difficulty = mapLiteracyLevelToDifficulty[user.financialLiteracyLevel];

    // Fetch quizzes with the mapped difficulty level
    const quizzes = await Quiz.find({ difficulty });

    // If no quizzes are found
    if (quizzes.length === 0) {
      return res
        .status(404)
        .json({ message: `No quizzes found for difficulty: ${difficulty}` });
    }

    // Return the quizzes
    res.status(200).json(quizzes);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching quizzes", error: error.message });
  }
});

// ROUTE3 - Get quizzes based on user's financial literacy level and category
router.post("/getquizzesbycat", getUser, async (req, res) => {
  const mapLiteracyLevelToDifficulty = {
    "Well Literate": "Pro",
    "Sufficient Literate": "Advanced",
    "Less Literate": "Intermediate",
    "Not Literate": "Beginner",
  };

  try {
    const user = await User.findById(req.user.id).select("-passwordHash"); // Exclude password hash
    const difficulty =
      mapLiteracyLevelToDifficulty[user.financialLiteracyLevel];
    const { category } = req.body;

    // Fetch all quizzes based on difficulty and category
    const allQuizzes = await Quiz.find({ difficulty, category });

    // Filter out completed quizzes
    const availableQuizzes = allQuizzes.filter(
      (quiz) =>
        !user.quizScores.some(
          (score) => score.quizId.toString() === quiz._id.toString()
        )
    );

    if (availableQuizzes.length === 0) {
      return res
        .status(404)
        .json({
          message: `No available quizzes for difficulty: ${difficulty}`,
        });
    }

    res.status(200).json(availableQuizzes);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching quizzes", error: error.message });
  }
});

// ROUTE4 - Update quiz scores for the authenticated user
router.put("/updatequizscores", getUser, async (req, res) => {
  try {
    const { quizId, score } = req.body;

    if (!quizId || typeof score !== "number") {
      return res
        .status(400)
        .json({ message: "Quiz ID and score are required." });
    }

    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Update quiz scores
    const existingScoreIndex = user.quizScores.findIndex(
      (quizScore) => quizScore.quizId.toString() === quizId
    );

    if (existingScoreIndex !== -1) {
      user.quizScores[existingScoreIndex].score = score;
    } else {
      user.quizScores.push({ quizId, score });
      // Add quizId to completedQuizzes only if it is new
      user.completedQuizzes.push(quizId);
    }

    // Update financial literacy level based on completed quizzes
    const completedCount = user.completedQuizzes.length;

    if (completedCount >= 12) {
      user.financialLiteracyLevel = "Well Literate";
    } else if (completedCount >= 8) {
      user.financialLiteracyLevel = "Sufficient Literate";
    } else if (completedCount >= 4) {
      user.financialLiteracyLevel = "Less Literate";
    }

    // Update profile completion
    user.profileCompletion = Math.min(completedCount * 6.25, 100); // Ensure it doesn't exceed 100

    await user.save();
    res.status(200).json({
      message: "Quiz scores updated successfully",
      quizScores: user.quizScores,
      completedQuizzes: user.completedQuizzes,
      financialLiteracyLevel: user.financialLiteracyLevel,
      profileCompletion: user.profileCompletion,
    });
  } catch (error) {
    console.error("Error updating quiz scores:", error.message);
    res
      .status(500)
      .json({ message: "Error updating quiz scores", error: error.message });
  }
});


module.exports = router;
