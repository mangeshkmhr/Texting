import React,{useState} from 'react'


export default function TextFormm(props) {
    const [text, setText] = useState('');
    
    const handleUpClick = ()=> {    
        // console.log('Uppercase Text ' +text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to Uppercase Text","success");
    }
    const handleLoClick = ()=> {    
       
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to Lowercase Text","success");
    }
    const CopyText = ()=> {    
       
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Copied text to Clipboard","success");
      
        
    }
    const handleClearClick = ()=> {    
       
        let newText = ('');
        setText(newText);
        props.showAlert(" Text Cleared","success");
        
    }
    const HandleSpaces = ()=> {    
       
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange = (event)=> {    
        // console.log('Onchage')
        setText(event.target.value)
    }
    return (
        <>
        <div className="container" style={{color:props.mode === 'dark'?'white':'#280d25'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'#280d25'}} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={CopyText}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={HandleSpaces}>Remove Extra Spaces </button>
        </div>
        <div className="container my-3" style={{color:props.mode === 'dark'?'white':'#280d25'}}>
            <h1>Your Text Summary</h1>
            <p>{text.length===0?0:text.trim().split(/[ ]+/).length} words and {text.length===0?0:text.trim().length} characters.</p>
            <p>{0.008 *  text.split(" ").length} Minutes read.</p>
            <p>{text.split("\n").length} number of Line.</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something In Above TextArea To Preview"}</p>
        </div> 
        </>
    )
}

