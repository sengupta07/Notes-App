import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
const App = () => {
  
  const [notes, setNotes] = useState(() => {
      const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
      return savedNotes ? savedNotes : [];
    },
  [
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/08/2023",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "16/08/2023",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "17/08/2023",
    },
    { 
      id: nanoid(),
      text: "This is my fourth note!",
      date: "22/08/2023",
    },
  ]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);
  console.log("darkMODe",darkMode);

  useEffect(() => {
    console.log("Retrieving notes from local storage...");
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );
    
    console.log("Saved notes:", savedNotes);
  
    if (savedNotes && Array.isArray(savedNotes)) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify((notes)));
  }, [notes]);

  const addNote = (text) => {
      const date = new Date();
      const newNote = {
        id: nanoid(),
        text,
        date: date.toLocaleDateString()
      }
      const newNotes = [...notes, newNote];
      setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }



  return (
      <div className={`App ${darkMode && 'dark-mode'}`}>
        <html>
          <div className="container">
            <Header handleToggleDarkMode={setDarkMode} />
            <Search handleSearchNote={setSearchText}/>
            <NotesList 
                notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
                handleAddNote={addNote}
                handleDeleteNote={deleteNote}
            />
          </div>
        </html>
      </div>
    
    
  );
};

export default App;
