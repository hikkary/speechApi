
/* jshint esversion: 6 */
import cors from 'cors';
import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import synthesis from './module/synthesis';
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const corsOptions = {
	origin: 'http://localhost:3000',
	optionsSuccessStatus: 200,
};

app.post('/allo', cors(corsOptions), async (req,res) => {
	let path = await synthesis(req.body.text, req.body.lang,req.headers.host, (err, fileLink) => {
		if (err) {
			console.log('error pico');
		} else {
			res.send(fileLink)
		}
	});

	// console.log("4 "+fs.existsSync(path));
	// while(!fs.existsSync(path)){
		// fs.existsSync(path);
		// console.log('haha');
	// }
	// console.log(path);
	// res.send(path);
});

app.get('/',(req, res) => {
  res.send('nami');
});

app.listen(8080, () => {
	console.log('Examplxe app listening on port 8080!');
});
