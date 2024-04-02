import React from "react";

function ShuffleCardsBtn({ shuffleCards }) {
    return (
        <div>
            <button onClick={shuffleCards}>Shuffle Cards</button>
        </div>
    );
}

export default ShuffleCardsBtn;