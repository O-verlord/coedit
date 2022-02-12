const fs = require('fs');
const path = require('path');
const {v4}

const dircodes = path.join(__dirname,"codes");
if(!fs.existsSync(dircodes)){
    fs.mkdirSync(dircodes, {recursive: true});
}
const generatecode =  (format, code)=>{

};
 module.exports.generatecode = generatecode; 