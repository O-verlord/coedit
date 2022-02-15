import React,{useState} from 'react'
import axios from 'axios'

function App() {
  const [code, setCode]=useState('');
  const handleSubmit = async()=>{
    console.log(code);
    const payload = {
      laanguage:"cpp",
      code
    }
    
      const output = await axios.post('http://localhost:5000/run', payload).catch(function(error){
        if (error.response){
          console.log(error.response.data);
          console.log(error.status);
        } else if(error.request){
          console.log(error.request);
        }else {
          console.log('Error', error.message);
        }
      });
      console.log(output)
  
  }
  return (
    <div className="App">
    <h1>Coedit</h1>
    <textarea rows="20" cols="70" value={code} onChange={(e)=>{setCode(e.target.value);}}></textarea>
    <br/>
    <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
