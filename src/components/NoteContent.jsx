import React, { useState } from "react";
import Notes from "./Notes";

function NoteContent() {
    const [text, setText] = useState("");
    const [title, setTitle] = useState("");
    const [savedNote, setSavedNote] = useState("");

    const saveNote = () => {
        setSavedNote({ title, text });
    };

    const handleSaveButtonClick = () => {
        saveNote();
    };

    return (
        <div className=" flex flex-col items-center mt-2  h-full ">
            <div className="flex flex-row items-center justify-center mb-2 bg-slate-400">
                <h1 id="box-title" className="text-xl font-bold font-title">
                    Başlık:
                </h1>
                <input
                    type="text"
                    className="w-72 border-2 rounded border-black ml-1"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <textarea
                className="basis-2/4  w-2/4 resize-none bg-textAreaColor mx-auto p-3 text-titleColor font-noteText text-xl h-auto"
                rows={15}
                cols={10}
                id="area"
                placeholder="Not tutun..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button
                className="mt-5 w-1/4 h-10 font-noteText p-2"
                onClick={handleSaveButtonClick} 
            >
                Oluştur
            </button>
            {savedNote && <Notes text={savedNote.text} title={savedNote.title} />}
        </div>
    );
}

export default NoteContent;
