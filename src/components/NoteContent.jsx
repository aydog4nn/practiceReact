import React, { useState } from "react";
import Notes from "./Notes";
import Buttons from "./Buttons";

function NoteContent() {
    const [text, setText] = useState("");
    const [title, setTitle] = useState("");
    const [savedNote, setSavedNote] = useState("");
    const [textStyle, setTextStyle] = useState({
        italic: false,
        
        uppercase: false,
        lowercase: false,
        underline: false,
        overline: false,
        "line-through": false,
        "text-center": false,
    });
    const saveNote = () => {
        setSavedNote({ title, text });
    };

    const handleSaveButtonClick = () => {
        saveNote();
    };

    return (
        <div className=" flex flex-col items-center h-full ">
            <Buttons
                textStyle={textStyle}
                setTextStyle={setTextStyle}
            ></Buttons>
            <div className="flex flex-row items-center justify-center m-8 bg-slate-400">
                <h1 id="box-title" className="text-xl font-bold font-title">
                    Başlık:
                </h1>
                <input
                    type="text"
                    className="w-72 border-2 rounded border-black ml-1"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
            </div>
            <textarea
                className={`basis-2/4  w-2/4 resize-none bg-textAreaColor mx-auto p-3 text-titleColor font-noteText text-xl h-auto ${
                    textStyle["text-center"] ? "text-center" : ""
                } ${textStyle["italic"] ? "italic" : ""} ${textStyle["uppercase"] ? "uppercase" : ""} ${
                    textStyle["lowercase"] ? "lowercase" : ""
                } ${textStyle["underline"] ? "underline" : ""} ${
                    textStyle["overline"] ? "overline" : ""
                } ${textStyle["line-through"] ? "line-through" : ""}`}
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
            {savedNote && (
                <Notes text={savedNote.text} title={savedNote.title} textStyle={textStyle} />
            )}
        </div>
    );
}

export default NoteContent;
