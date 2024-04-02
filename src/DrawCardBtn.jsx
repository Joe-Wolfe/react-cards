import React from "react";

function DrawCardBtn({ drawCard }) {
    return (

        <div>
            <button onClick={drawCard}>Draw Card</button>
        </div>
    );
}

export default DrawCardBtn;

