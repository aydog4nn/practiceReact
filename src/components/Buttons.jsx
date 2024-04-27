import React from "react";

function Buttons() {

    return (
        <div className="w-full flex items-center mx-auto justify-center p-3 bg-slate-500 gap-2">
            <div className="basis-2/4 flex justify-center gap-2">
                <button>İtalik</button>
                <button>Kalın</button>  
                <button>Güçlü</button>
                <button>Büyük</button>
                <button>Küçük</button>
                <button>İşaretli</button>
                <button>Paragraf</button>
                <button>Altını Çiz</button>
                <button>Ortala</button>
            </div>
        </div>
    );
}

export default Buttons;
