/* jshint esversion: 6 */
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const corsOptions = {
	origin: 'http://localhost:3000',
	optionsSuccessStatus: 200,
};

app.post('/allo', cors(corsOptions), (req,res) => {
	res.send('test');
});

app.get('/',(req, res) => {
  res.send('nami');
});

app.listen(8080, () => {
	console.log('Examplxe app listening on port 8080!');
});
