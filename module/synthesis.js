import fs from 'fs';
import exec from 'child_process';


var commandTmpl = 'pico2wave -l "{{lang}}" -w {{file}} {{text}}'

function getTmpFile() {
	var random = Math.random().toString(36).slice(2),
		path = 'tmp/' + random + '.wav'

	return (!fs.existsSync(path)) ? path : getTmpFile()
}

const synthesis = async (text, lang, host, cb) => {
		let file =  getTmpFile()
		let command = commandTmpl.replace('{{lang}}', lang).replace('{{text}}', text).replace('{{file}}', file)
		console.log("1 "+file);
		console.log("2 "+host);
		await exec.exec(command, function(err) {
			if (err) cb(err)
			else {
				cb(null, "http://" + host.split(":")[0] + '/api/picotts/' + file)
			}
			// console.log('ace');

			// fs.unlink(file)
		})


		// console.log("3 "+fs.existsSync(file));
		// while(!fs.existsSync(file)){
		// 	console.log(fs.existsSync(file));
		// }
		// console.log(fs.existsSync(file));



	}

export default synthesis;
