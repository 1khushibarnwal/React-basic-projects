import { useState } from "react";
import "./index.css";

const values = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

const shuffleCards = () =>
  [...values]
    .sort(() => Math.random() - 0.5)
    .map((value) => ({
      value,
      flipped: false,
      matched: false,
      wrong: false,
      owner: null,
    }));

export default function App() {
  const [cards, setCards] = useState(shuffleCards());

  const [selected, setSelected] = useState([]);

  const [turn, setTurn] = useState(1);

  const [score1, setScore1] = useState(0);

  const [score2, setScore2] = useState(0);

  const [winner, setWinner] = useState(null);

  const restart = () => {
    setCards(shuffleCards());
    setSelected([]);
    setTurn(1);
    setScore1(0);
    setScore2(0);
    setWinner(null);
  };

  const checkWinner = (board, s1, s2) => {
    if (board.every((c) => c.matched)) {
      if (s1 > s2) setWinner("Player 1 Wins!");
      else if (s2 > s1) setWinner("Player 2 Wins!");
      else setWinner("It's a Draw!");
    }
  };

  const handleClick = (index) => {
    if (
      cards[index].flipped ||
      cards[index].matched ||
      selected.length === 2 ||
      winner
    )
      return;

    const nextCards = cards.map((c) => ({
      ...c,
    }));

    nextCards[index] = {
      ...nextCards[index],
      flipped: true,
    };

    const nextSelected = [...selected, index];

    setCards(nextCards);
    setSelected(nextSelected);

    if (nextSelected.length === 2) {
      const [first, second] = nextSelected;

      if (nextCards[first].value === nextCards[second].value) {
        setTimeout(() => {
          const matched = nextCards.map((c) => ({
            ...c,
          }));

          matched[first] = {
            ...matched[first],
            matched: true,
            owner: turn,
          };

          matched[second] = {
            ...matched[second],
            matched: true,
            owner: turn,
          };

          let s1 = score1;
          let s2 = score2;

          if (turn === 1) {
            s1++;
            setScore1(s1);
          } else {
            s2++;
            setScore2(s2);
          }

          setCards(matched);

          setSelected([]);

          checkWinner(matched, s1, s2);
        }, 500);
      } else {
        const wrong = nextCards.map((c) => ({
          ...c,
        }));

        wrong[first] = {
          ...wrong[first],
          wrong: true,
        };

        wrong[second] = {
          ...wrong[second],
          wrong: true,
        };

        setCards(wrong);

        setTimeout(() => {
          const reset = wrong.map((c) => ({
            ...c,
          }));

          reset[first] = {
            ...reset[first],
            flipped: false,
            wrong: false,
          };

          reset[second] = {
            ...reset[second],
            flipped: false,
            wrong: false,
          };

          setCards(reset);

          setSelected([]);

          setTurn((prev) => (prev === 1 ? 2 : 1));
        }, 1000);
      }
    }
  };

  return (
    <div className="app">
      <h1>🧠 Neon Memory Game</h1>

      <div className="scoreboard">
        <p>
          Player 1:
          {score1}
        </p>

        <p>Turn: Player {turn}</p>

        <p>
          Player 2:
          {score2}
        </p>
      </div>

      <button onClick={restart}>Restart</button>

      <div className={`grid-container ${winner ? "blurred" : ""}`}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`grid-item
                ${
                  card.owner === 1
                    ? "player1"
                    : card.owner === 2
                      ? "player2"
                      : ""
                }
                ${card.wrong ? "wrong" : ""}`}
            onClick={() => handleClick(index)}
          >
            {card.flipped || card.matched ? card.value : "?"}
          </div>
        ))}
      </div>

      {winner && (
        <div className="winner-overlay">
          <h1>{winner}</h1>

          <button onClick={restart}>Play Again</button>
        </div>
      )}
    </div>
  );
}
