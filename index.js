import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import Calculator from "./Calculator";

dotenv.config();

export const app = express();

const port = 8080;

app.use(bodyParser.json());

app.listen(port, () => console.log(`oneway is listening on port ${port}`));

Calculator(app);
