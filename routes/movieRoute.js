import express from "express";
import {
  fetchMovie,
  getAllMovies,
  getUsers,
  listDirectors,
  createUser,
  deleteUser,
  updateUser,
} from "../controller/movieController.js";

const route = express.Router();
route.get("/", fetchMovie);
route.get("/getAll", getAllMovies);

route.post("/user", createUser);
route.get("/user", getUsers);
route.put("/user/:id", updateUser);
route.delete("/user/:id", deleteUser);

route.get("/listdirectors", listDirectors);

export default route;
