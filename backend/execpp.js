const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const outputpath = path.join(__dirname, "outputs");

if(!fs.existsSync(outputpath)){
    fs.mkdirSync(outputpath, { recursive: true });
}

const execpp = (filepath)=>{
    jobid = path.basename(filepath).split(".")[0];
    outpath = path.join(outputpath, `${jobid}.out`);
    return new Promise((resolve, reject)=>{
        exec(`g++ ${filepath} -o ${outpath} && cd ${outputpath} && ./${jobid}.out`,
        (error, stdout, stderr) => {
            error && reject({ error, stderr });
            stderr && reject(stderr);
            resolve(stdout);
                });
    });
};

module.exports.execpp = execpp;