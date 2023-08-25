import { useState, useRef, useEffect } from "react";

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    const [isOverflowing, setOverflowing] = useState(false);
    const characterLimit = 500;
    const textareaRef = useRef(null);

    useEffect(() => {
        if (textareaRef.current) {
            if (textareaRef.current.scrollHeight > textareaRef.current.clientHeight) {
              setOverflowing(true);
            } else {
              setOverflowing(false);
            }
          }
        }, [noteText]);


    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >=0){
            setNoteText(event.target.value);
        }
    };

    const handleSaveClick = () => {
        if(noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }

    }
    return (
        <div className={`note new ${isOverflowing ? 'overflow' : ''}`}>
            <textarea 
                rows="8" 
                cols='10' 
                placeholder='Type to add a note...'
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className="save" onClick={
                    handleSaveClick
                }
                >Save</button>
            </div>
        </div>
    );
};

export default AddNote;