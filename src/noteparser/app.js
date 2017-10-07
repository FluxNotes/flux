import fs from 'fs';
import util from 'util';
import path from 'path';
import mkdirp from 'mkdirp';
//import bunyan from 'bunyan';
import program from 'commander';
import NoteParser from './NoteParser';

let input;
program
  .usage('<path-to-clinical-notes> [options]')
  .option('-l, --log-level <level>', 'the console log level <fatal,error,warn,info,debug,trace> (default: info)', /^(fatal|error|warn|info|debug|trace)$/i, 'info')
  .option('-m, --log-mode <mode>', 'the console log mode <short,long,json,off> (default: short)', /^(short|long|json|off)$/i, 'short')
  .option('-o, --out <out>', 'the path to the output folder (default: ./out)', './out')
  .arguments('<path-to-clinical-notes>')
  .action(function (pathToClinicalNotes) {
    input = pathToClinicalNotes;
  })
  .parse(process.argv);

// Check that input folder is specified
if (typeof input === 'undefined') {
    // print error in red text (\x1b[31m) then reset color back to normal (\x1b[0m)
    console.error('\x1b[31m','Missing path to clinical notes folder','\x1b[0m');
    program.help();
}

// Create the output folder if necessary
mkdirp.sync(program.out);

let noteParser = new NoteParser();

let perFileFunc = (file) => {
    let content;
    //console.log(content);
    fs.readFile(file, 'utf8', function (err,data) {
        if (err) {
            return console.error(err);
        }
        console.log("***************************************************");
        console.log(file);
        content = util.format(data);
        console.log(util.inspect(noteParser.parse(content), false, null));
    });
};

let iterateAllFilesDeep = (start, perFileFunc) => {
    fs.stat(start, function(error,  stat) {
        if (error) {
            return console.error(error);
        }
        if (stat.isFile()) {
            perFileFunc(start);
        } else { // directory
            fs.readdir(start, function (err, files) {
                if (err) {
                    return console.error(err);
                }
                files.forEach( function(file, index) {
                    iterateAllFilesDeep(path.join(start, file), perFileFunc);
                });
            });
        }
    });
};

iterateAllFilesDeep(input, perFileFunc);

console.log("DONE");