const express = require("express");
const router = express.Router();
const { createProfile, getProfiles } = require("../controllers/profileController");

router.post("/create", createProfile);
router.get("/all", getProfiles);

// Test route (data insert karne ke liye)
router.get("/test", async (req, res) => {
  const Profile = require("../models/Profile");

  const profile = new Profile({
    name: "Punam",
    email: "punam@gmail.com",
    skills: "Node.js, MongoDB",
    experience: "Fresher"
  });

  await profile.save();
  res.json(profile);
});

module.exports = router;