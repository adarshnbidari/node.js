const yargs=require('yargs');


const notes=require('./notes.js');

const argv=yargs.argv;

var command=argv._[0];

if(command==="add"){
	var note=notes.addNote(argv.title,argv.body);
	if(note){
		notes.logNote(note);
	}else{
		console.log('note title taken');
	}
}else if(command==="remove"){
	var noteRemoved=notes.removeNote(argv.title);
	
	var message=noteRemoved ? 'note was removed' : 'note not found' ;
	console.log(message);
	
}else if(command==="read"){
	var note=notes.getNote(argv.title);
	if(note){
		notes.logNote(note);
	}else{
		console.log('note not found');
	}
}else if(command==="list"){
	notes.getAll();
}else{
	console.log('command not recognized!...');
}