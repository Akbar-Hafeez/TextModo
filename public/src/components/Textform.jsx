import React,{useState} from 'react'
import PropTypes from 'prop-types'
export default function Textform(props) {
  const [text,setText] = useState('')
// for putting value in textbox
  const handleOnChange=(event)=>{
setText(event.target.value);
  }
  // for converting text into uppercase
  const handleUpClick=()=> {
 const newText=text.toUpperCase();
setText(newText)
props.showAlert("success","Converted To Upper Case")
  }
  //  for converting text into Lowercase
  const handleLoClick=()=>{
    const newText= text.toLowerCase();
    setText(newText)
    props.showAlert("success","Converted To Lower Case")
  }
  // for converting into title case
  const handleTiClick = () => {
   const newText= text.replace(/\b\w/g, (match) => match.toUpperCase());
   setText(newText)
   props.showAlert("success","Converted To Title Case")
  }
  // for converting into Camel case
  const handleCaClick = () => {
    const newText= text.replace(/\s(.)/g, (match, group) => group.toUpperCase());
    setText(newText)
    props.showAlert("success","Converted To Camel Case")
   }
  //  for reversing text
  const handleReClick = () => {
    const newText= text.split('').reverse().join('');
      setText(newText)
      props.showAlert("success","Text Reversed")
    }
    // for removing extra spaces
   
    const handleExClick = () => {
      const newText= text.replace(/\s+/g, ' ').trim();
        setText(newText)
        props.showAlert("success","Extra Spaces Removed")
      }
      // for copy the text
const handleCopy=()=>{
  const text=document.getElementById("my-box");
  text.select();
  navigator.clipboard.writeText(text.value);
  // your text will no longer keep selected
  document.getSelection().removeAllRanges();
  props.showAlert("success","Text Copied To Clipboard")
}
// for counting words in text
const handleCount=()=>{
  // you can also use filter method to not count space as a word i.e[ filter(element)=>{return element.length!==0}]
  const count= text.trim() === '' ? 0 : text.match(/\S+/g).length;
  alert("You have "+count+" words")
}
// for finding length of characters
const handleCharacters=()=>{
   const characters=text.replace(/\s+/g, '').trim().length;
  alert("you have "+characters+" characters in your text")
}
// for finding estimated time to read
const handleEt=()=>{
  const estimatedTime =0.08*text.split(" ").length;
  alert("The Estimated Time to read these text is "+estimatedTime+" Minutes")
}
 
  return (
    
      <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1>{props.title}</h1></label>
  <textarea className="form-control" id="my-box" rows="8" value={text} onChange={handleOnChange} ></textarea>
  <button disabled={text.length===0} className="btn btn-primary my-3" onClick={handleUpClick} >Convert To Uppercase</button>
  <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleLoClick} >Convert To Lowercase</button>
  <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleTiClick} >Convert to Title Case</button>
  <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleCaClick} >Convert to Camel Case</button>
  <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleExClick} >Remove Extra Spaces</button>
  <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleReClick} >Reverse Text</button>
  <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleCopy} >Copy Text</button>
  <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleCount} >Count Words</button>
  <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleCharacters} >Count Characters</button>
  <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleEt} >Estimated Time To Read</button>
  
  <h2>Preview</h2>
  <p>{text.length>0?text:"Nothing to Preview"}</p>
</div>
   
  )

}
