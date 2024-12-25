const express = require("express");
const User = require("../models/User"); // Assuming User model is in models directory
const FinancialProfile = require("../models/financialProfile");
const getUser = require("../middleware/getUser"); //middleware to get user
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const JWT_SECRET = "f1nEZ69";

// ROUTE-1: Create a user using POST "/api/auth/createuser" No login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name.").isLength({ min: 3 }),
    body("email", "Enter a valid email.").isEmail(),
    body("password", "The password must be at least 8 characters.").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      // If there are errors, return bad request and error messages.
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Check whether a user with this email already exists
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ message: "Sorry, a user with this email already exists." });
      }

      // Password hashing
      const salt = await bcrypt.genSalt(10);
      const securePass = await bcrypt.hash(req.body.password, salt);

      // Save the new user to the database
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        passwordHash: securePass, // Storing hashed password
        financialLiteracyLevel: req.body.financialLiteracyLevel, // Default literacy level
        profileCompletion: 0, // Default profile completion percentage
        quizScores: [], // Empty quizScores array
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      // Generate JWT token
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ authToken }); // Send the generated JWT token
    } catch (error) {
      console.error("Error adding user:", error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//ROUTE-2: Authenticating user using login endpoint POST "/api/auth/login"
router.post(
  "/login",
  [
    body("email", "Enter a valid email.").isEmail(),
    body("password", "Password cannot be empty.").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      //if there are errors return bad request and error.
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { email, password } = req.body;
      let user = await User.findOne({ email });
      //Check whether a user with this email already exists
      if (!user) {
        return res.status(400).json({
          message:
            "Invalid login credentials,please try logging in with valid credentials.",
        });
      }

      //comparing the entered password with hashed pass in database
      const passwordCompare = await bcrypt.compare(password, user.passwordHash);
      if (!passwordCompare) {
        return res.status(400).json({
          message:
            "Invalid login credentials,please try logging in with valid credentials.",
        });
      }

      const data = {
        user: {
          id: user.id,
        },
      };

      //generating a JWT token
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ authToken }); //send the generated JWT token
    } catch (error) {
      console.error("Error adding user:", error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//ROUTE-3: Authenticating user using login endpoint POST "/api/auth/getuser" Login required
router.get("/getuser", getUser, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-passwordHash"); // Exclude password hash
    res.send(user);
  } catch (error) {
    console.error("Error fetching user:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

//ROUTE-4: Creating financial profile of a user using  endpoint POST "/api/auth/createfinanceprofile" Login required
//ROUTE-4: Creating financial profile of a user using endpoint POST "/api/auth/createfinanceprofile" Login required
router.post("/createfinanceprofile", getUser, async (req, res) => {
  try {
    const { monthlyIncome, expenses, savings, investments, financialGoals } =
      req.body;

    // Validate required fields
    if (!monthlyIncome || !expenses || !savings) {
      return res.status(400).json({
        message: "Please provide monthly income, expenses, and savings.",
      });
    }

    // Find the user using the ID from the getUser middleware
    const user = await User.findById(req.user.id).select("-passwordHash"); // Exclude password hash

    // Create a new financial profile
    const financialProfile = new FinancialProfile({
      userId: user._id, // Get userId from the middleware
      monthlyIncome,
      expenses,
      savings,
      investments, // Array of investments
      financialGoals, // Array of financial goals
    });

    // Save the financial profile to the database
    const savedProfile = await financialProfile.save();

    res.status(201).json({
      message: "Financial profile created successfully.",
      profile: savedProfile,
    });
  } catch (error) {
    console.error("Error creating profile:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
