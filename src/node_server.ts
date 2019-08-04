import * as express from "express";

const app = express();

app.get('/', (req, res) => res.send("Hello server"));

app.get('/test', (req, res) => res.send("Test GET success"));

const server = app.listen(8083, "localhost", () => console.log("Server start at: http://localhost:8083"));
