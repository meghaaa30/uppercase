import React, {useState} from 'react';

export default function TextForm(props){


  const handleUpClick= () => {
     console.log('uppercase was clicked' + text);
     let newText= text.toUpperCase();
     setText(newText);
  }
  const copyText=()=>{
     var text= document.getElementById('exampleFormControlTextarea1');
     text.select();
     navigator.clipboard.writeText(text.value);
     document.getSelection().removeAllRanges();
  }
  const handleOnChange= (event) => {
    console.log('On changed');
    setText(event.target.value);
 }
    const [text, setText]= useState('enter text here');
  
    return(
        <div>
          
          <h1>{props.heading}</h1>
            
  <div className="form-group">
   
    <textarea disabled={text.length===0} className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey': 'white'}} id="exampleFormControlTextarea1" rows="5"></textarea>
  </div>
  <button disabled={text.length===0} className='btn btn-primary' onClick={handleUpClick}>Convert to uppercase</button>
  <button disabled={text.length===0} className='btn btn-primary' onClick={copyText}>Copy Text</button>
    <div className='container'>
      <h1>your text summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}  words {text.length}</p>
    </div>
        </div>
    )
}