const express = require('express');
const {generatecode} = require("./generatecode")
const {execpp} = require("./execpp")

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/run', async(req, res)=>{
    
    const { language = "cpp", code } = req.body;
    
    if(code===undefined){return res.status(400).json({success:false, error:"Empty code body!"})};
    console.log(req.body);
    
    const filepath =  await generatecode(language,code);
    const output = await execpp(filepath);
    return res.json({ filepath, output});
});

app.get('/',async(req, res)=>{
    res.send("hello'");
});

app.listen(5000, ()=>{
    console.log("listening on port")
});
