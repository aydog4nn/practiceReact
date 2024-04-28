import React from "react";

function Notes(props) {
    const { text, title, textStyle } = props;

    const combinedStyles = Object.keys(textStyle)
    .filter(key => textStyle[key])
    .join(" ");


    return (
        <div className="container border-2 border-black flex-col mb-10 w-1/2 h-auto mt-5 rounded mx-auto">
            <div className={`flex flex-col max-w-[calc(100%-4rem) ${combinedStyles} whitespace-normal`}> 
                <div className="text-ellipsis p-2 text-center">
                    <h1 className="text-3xl font-title font-bold">{title}</h1>
                </div>
                <div className={`text-center p-2 overflow-y-auto ${combinedStyles}`}> 
                    {text}
                </div>
            </div>
        </div>
    );
}

export default Notes;

