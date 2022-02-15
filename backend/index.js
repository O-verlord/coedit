const express = require('express');
const {generatecode} = require("./generatecode");
const {execpp} = require("./execpp");
const cors = require("cors");

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.post('/run', async(req, res)=>{
    
    const { language = "cpp", code } = req.body;
    
    if(code===undefined){return res.status(400).json({success:false, error:"Empty code body!"})};

    try{
    const filepath =  await generatecode(language,code);
    const output = await execpp(filepath);
    return res.json({ filepath, output});
    }catch(err){res.status(500).json({err})}
});

app.get('/',async(req, res)=>{
    res.send("hello'");
});

app.listen(5000, ()=>{
    console.log("listening on port")
});
