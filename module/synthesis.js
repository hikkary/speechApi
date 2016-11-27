import fs from 'fs';
import exec from 'child_process';


var commandTmpl = 'pico2wave -l "{{lang}}" -w {{file}} {{text}}'

function getTmpFile() {
	var random = Math.random().toString(36).slice(2),
		path = 'tmp/' + random + '.wav'

	return (!fs.existsSync(path)) ? path : getTmpFile()
}

const synthesis = (text, lang, host, cb) => {
		let file = getTmpFile()
		let command = commandTmpl.replace('{{lang}}', lang).replace('{{text}}', text).replace('{{file}}', file)
		console.log(file);
		console.log(host);
		exec.exec(command, function(err) {
			cb && cb(err)
			console.log('ace');
			// fs.unlink(file)
		})
		return (host + '/api/picotts/tmp/' + file)
		
	}

export default synthesis;
