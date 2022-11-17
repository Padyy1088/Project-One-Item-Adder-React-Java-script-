import { useState } from 'react';
import { Button } from '@material-ui/core';


function App() {
  return (
    <div>
      <h1 style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>List Adder</h1>
      <h2 style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>How to use:</h2>
      <p1 style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>Type what you would like to add into the text box</p1>
      <p2 style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}> and click on the button labeled "submit" to add it to the list.</p2>
      <br />
      <TextAndButton />
      <Button color="primary">Hello World</Button>
    </div>
  );
}
export default App;
function TextAndButton(state) {
  const [list, setList] = useState([]);
  const [inputBox, setInputBox] = useState("");
  return(
    <div>
      <label style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        Text Box </label><br />
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <br /><input onChange={event => setInputBox(event.target.value)}></input>
        <button onClick={() => setList([...list, inputBox])}>Submit</button>
        </div>
      <li style ={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>• {list.join(', • ')}</li>
    </div>
  )
}
