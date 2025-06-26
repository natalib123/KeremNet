import { Express } from "express";
import express from "express";
import router from "./Routes/PostRoutes";
const cors = require('cors');

const app: Express = express();

app.use(cors());

app.use(express.json());

app.use('/api', router);

export default app;