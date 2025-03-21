import express from "express";
import { getBook } from "../controller/book.controller.js";

const bookRouter = express.Router();

bookRouter.get("/", getBook);

export default bookRouter;
