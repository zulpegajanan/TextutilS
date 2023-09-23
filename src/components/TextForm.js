// rfc

import React,{useState} from 'react'



export default function TextForm(props) {
    const [text,setText] = useState('enter Text hare')

    const handleUpClick=()=>{
        // console.log("handleUpClick was clicked" + text)
        let newText=text.toUpperCase()
        setText(newText)
    }
    const handleDownClick=()=>{
        // console.log("handleUpClick was clicked" + text)
        let newText=text.toLowerCase()
        setText(newText)
    }

    const downloadFile = (filename, content) => {
        const element = document.createElement('a');
        const file = new Blob([content], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = filename;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        URL.revokeObjectURL(element.href);
      };

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text)
          .then(() => {
            console.log("Text copied successfully!");
            alert("Text copied successfully!")
          })
          .catch((error) => {
            console.error("Error copying text:", error);
          });
      };

      const handleClearClick=()=>{
        let newText=""
        setText(newText)
      }

      const generateRandomSentence = () => {
        const subjects = ['I', 'You', 'He', 'She', 'They'];
        const verbs = ['eat', 'sleep', 'run', 'play', 'write'];
        const objects = ['an apple', 'a book', 'the guitar', 'a movie', 'a letter'];
        
        const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
        const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
        const randomObject = objects[Math.floor(Math.random() * objects.length)];
        
        let newText= `${randomSubject} ${randomVerb} ${randomObject}.`;
        setText(newText)
      };
      

    const handleOnChange=(event)=>{
        // console.log("on change")
        setText(event.target.value)
    }

    // text="wrong way"
    // setText("correct way")
    return (
        <>
            <div className='container'>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>

                <div className='"lg-8 mx-3'>
                    <button className='btn btn-primary lg-6 m-1' onClick={handleUpClick}>Convert to uppercase</button>
                    <button className='btn btn-primary lg-8 m-1' onClick={handleDownClick}>Convert to downcase</button>
                    <button className='btn btn-primary lg-8 m-1' onClick={handleCopyClick}>Copy</button>
                    <button className='btn btn-primary lg-8 m-1' onClick={handleClearClick}>Clear</button>
                    <button className='btn btn-primary lg-8 m-1' onClick={generateRandomSentence}>random</button>
                    <button className="btn btn-info m-1" onClick={() => downloadFile('myFile.txt', 'This is the file content.')}> Download File </button>
                </div>
            </div>

            <div className='container my-6'>
                <h3>text summary</h3>
                <p>{text.split(" ").filter((ele)=>{return ele.length!==0}).length} words And {text.length} charaters</p>
                <p>{(0.008 * text.split(" ").length).toFixed(5)} min time to read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>



        </>
  )
}
