const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const mongoURI = "mongodb://Sophia:Sophia_Password@atlas-sql-68fd04301930d377b987fa5a-nzf3oj.a.query.mongodb.net/countryDB?ssl=true&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(mongoURI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

const countrySchema = new mongoose.Schema({name: String});
const Country = mongoose.model("Country", countrySchema);
    

app.get("/api/countries", async(req, res) => {
  try{
    const countries = await Country.find({});
    res.json(countries.map(country => country.name));
  }
  catch(err){
    console.error("Error fetching countries:", err);
    res.status(500).send("Server error");
  }
});

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
