import mongoose from "mongoose";

const directorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nationality: { type: String, required: true },
  age: { type: Number },
  deathdate: { type: Date },
});

const Director = mongoose.model("Director", directorSchema);

export default Director;
