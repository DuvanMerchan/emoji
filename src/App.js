import useRef from 'react';
import EmojiePickerInput from "./component/emojiePicker/emojiePickerInput";
import EmojiePicker from "./component/emojiePicker/emojiPiker";

function App() {
  const refInput = useRef(null)
    
  function handleClick(){
      //refInput.current.focus()
  }
  return( 
  //<EmojiePickerInput />
  <div>
  <input //ref={refInput} 
  />
  <button onClick={handleClick} >Da chick</button>
  <EmojiePicker />
</div>

  )
}

export default App;
