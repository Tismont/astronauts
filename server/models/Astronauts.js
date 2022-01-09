const mongoose = require("mongoose");

const AstronautSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  superpower: {
    type: String,
    required: true,
  },
  dateBirth: {
    type: String,
    required: true,
  },
  key: {
    type: String,
    required: true,
  },
});

const Astronauts = mongoose.model("AstronautData", AstronautSchema);
module.exports = Astronauts;