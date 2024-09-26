// Movie Controller - where the real CRUD operations are done

import Director from "../model/directorModel.js";
import Movie from "../model/movieModel.js";
import User from "../model/userModel.js";

export const fetchMovie = async (req, res) => {
  try {
    return res.json("hello Movie.");
  } catch (err) {
    console.error(err);
  }
};

export const getAllMovies = async (req, res) => {
  try {
    const allMovie = await Movie.find();
    return res.status(300).json(allMovie);
  } catch (err) {
    console.error(err);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(300).json(users);
  } catch (err) {
    console.error(err);
  }
};
export const createUser = async (req, res) => {
  try {
    const userData = new User(req.body);
    const newUser = await userData.save();
    return res.status(200).json(newUser);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    return res.status(200).send({ message: "Deleted this user", data: user });
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    return res.status(200).send({ message: "Updated this user", data: user });
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
};
export const listDirectors = async (req, res) => {
  try {
    const dirs = await Director.find();
    return res.json(dirs);
  } catch (err) {
    console.error(err);
  }
};
