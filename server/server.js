const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const AstronautModel = require("./models/Astronauts")
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://mernUser:mernPassword@cluster0.xyrer.mongodb.net/Astronauts?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.post("/insert", async (req, res) => {

  const id = req.body.id;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const superpower = req.body.superpower;
  const dateBirth = req.body.dateBirth;
  const key = req.body.key;

  const Astronaut = new AstronautModel({id: id, firstName: firstName, lastName: lastName, superpower: superpower, dateBirth: dateBirth, key: key});

  try {
    await Astronaut.save();
  } catch (err) {
      console.log(err)
  }
})

app.get("/read", async (req, res) => {
  AstronautModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
 
  await AstronautModel.deleteOne({id: id}).exec();
  res.send("deleted");
});


app.listen(3001, () => {
  console.log(`Server is running on port: 3001`);
});