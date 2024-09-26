import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
});

const Movie = mongoose.model.Movie || mongoose.model("Movie", movieSchema);

export default Movie;
