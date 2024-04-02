import React, { useState, useEffect } from "react";
import axios from "axios";
import DrawCardBtn from "./DrawCardBtn";
import ShuffleCardsBtn from "./ShuffleCardsBtn";
import Cards from "./Cards";
import "./PlayingArea.css";

function PlayingArea() {

    const [deck, setDeck] = useState([]);
    const [cards, setCards] = useState([]);

    useEffect(function createNewDeck() {
        try {
            axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
                .then((response) => {
                    setDeck(response.data.deck_id);
                });
        }
        catch (error) {
            console.log(error);
        }
    }, []);

    function drawCard() {
        console.log("Draw Card");
        try {
            axios.get(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`)
                .then((response) => {
                    if (response.data.success === false) {
                        alert("No more cards in the deck");
                    }
                    else {
                        setCards([...cards, response.data.cards[0].images.png]);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    };

    function shuffleCards() {
        console.log("Shuffle Cards");
        try {
            axios.get(`https://deckofcardsapi.com/api/deck/${deck}/shuffle/`)
                .then((response) => {
                    setCards([]);
                });
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="playing-area">
            <div>
                <DrawCardBtn className="draw-card-btn" drawCard={drawCard} />
                <ShuffleCardsBtn className="shuffle-cards-btn" shuffleCards={shuffleCards} />
            </div>

            <div className="deck">
                <Cards className="cards" cards={cards} />
            </div>
        </div>
    );
}

export default PlayingArea;