import useRef from 'react';
import EmojiePicker from "./emojiPiker";

export default function EmojiePickerInput(){

    const refInput = useRef(null)
    
    function handleClick(){
        //refInput.current.focus()
    }
    
    return(
        <div>
            <input //ref={refInput} 
            />
            <button onClick={handleClick} >Da chick</button>
            <EmojiePicker />
        </div>
    )
}