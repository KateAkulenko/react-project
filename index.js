import express, { json } from 'express';
import cors from 'cors';

const port = 3000;
const app = express();

app.use(json());
app.use(cors());

app.use(express.static('./dist'));

app.listen(port, () => {
  console.log(` Server started in port: ${port} `);
});