import React, { useState } from "react";

function Buttons({ textStyle, setTextStyle }) {
    const handleStyleChange = (style) => {
        console.log(textStyle);

        setTextStyle({
            italic: false,
            
            uppercase: false,
            lowercase: false,
            underline: false,
            overline: false,
            "line-through": false,
            "text-center": false,
        });

        setTextStyle((prevStyles) => ({
            ...prevStyles,
            [style]: !prevStyles[style],
        }));
    };

    return (
        <div className="w-full flex items-center mx-auto justify-center p-3 bg-slate-500 gap-2">
            <div className="basis-2/4 flex justify-center gap-2">
                <button onClick={() => handleStyleChange("italic")}>
                    İtalik
                </button>
                
                <button onClick={() => handleStyleChange("uppercase")}>
                    Büyük
                </button>
                <button onClick={() => handleStyleChange("lowercase")}>
                    Küçük
                </button>
                <button onClick={() => handleStyleChange("overline")}>
                    Üstü Çizili
                </button>
                <button onClick={() => handleStyleChange("line-through")}>
                    Üstünü Çiz
                </button>
                <button onClick={() => handleStyleChange("underline")}>
                    Altını Çiz
                </button>
                <button onClick={() => handleStyleChange("text-center")}>
                    Ortala
                </button>
            </div>
        </div>
    );
}

export default Buttons;
