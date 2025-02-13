import express from "express";
import "dotenv/config";
import routes from "./routes";

const app = express();
const port = 3000;	

app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`Server running on port ${port}`));