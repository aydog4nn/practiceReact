import React from "react";

function Notes(props) {
    const {text,title} = props;
    return (
        <div className="container border-2 border-black flex-col h-auto w-1/2 mt-5 rounded mx-auto whitespace-normal overflow-hidden ">
            <div className="text-ellipsis  p-2 text-center">
                <h1 className="text-3xl font-title font-bold">
                    {title}
                </h1>
            </div>
            <div className="text-center text-wrap p-2 ">
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Notes;
