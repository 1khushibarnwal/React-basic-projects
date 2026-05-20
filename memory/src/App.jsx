import { useState } from "react";
import "./index.css";

export default function App() {
  const shuffle = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

    return arr
      .map((v) => ({ value: v, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((v) => ({
        value: v.value,
        flipped: false,
        matched: false,
      }));
  };

  const [cards, setCards] = useState(shuffle());
  const [selected, setSelected] = useState([]);
  const [player, setPlayer] = useState(1);
  const [score, setScore] = useState({ 1: 0, 2: 0 });
  const [lock, setLock] = useState(false);

  const restartGame = () => {
    setCards(shuffle());
    setSelected([]);
    setPlayer(1);
    setScore({ 1: 0, 2: 0 });
    setLock(false);
  };

  const handleClick = (index) => {
    if (
      lock ||
      cards[index].flipped ||
      cards[index].matched ||
      selected.length === 2
    )
      return;

    const newCards = cards.map((card, i) =>
      i === index ? { ...card, flipped: true } : card,
    );

    const newSelected = [...selected, index];

    setCards(newCards);
    setSelected(newSelected);

    if (newSelected.length === 2) {
      setLock(true);

      const [first, second] = newSelected;

      if (newCards[first].value === newCards[second].value) {
        const updatedCards = newCards.map((card, i) =>
          i === first || i === second ? { ...card, matched: true } : card,
        );

        setCards(updatedCards);

        setScore((prev) => ({
          ...prev,
          [player]: prev[player] + 1,
        }));

        setSelected([]);
        setLock(false);
      } else {
        setTimeout(() => {
          const updatedCards = newCards.map((card, i) =>
            i === first || i === second ? { ...card, flipped: false } : card,
          );

          setCards(updatedCards);
          setSelected([]);
          setPlayer((prev) => (prev === 1 ? 2 : 1));
          setLock(false);
        }, 1000);
      }
    }
  };

  const winner =
    score[1] + score[2] === 8
      ? score[1] > score[2]
        ? "PLAYER 1 WINS"
        : score[2] > score[1]
          ? "PLAYER 2 WINS"
          : "DRAW"
      : null;

  return (
    <div className="app">
      <h1>Memory Game</h1>

      {!winner && <h2>Player {player}'s Turn</h2>}

      <div className="scoreboard">
        <p>Player 1: {score[1]}</p>
        <p>Player 2: {score[2]}</p>
      </div>

      <button onClick={restartGame}>Restart</button>

      <div className={`grid-container ${winner ? "blurred" : ""}`}>
        {cards.map((card, index) => (
          <div
            key={index}
            className="grid-item"
            onClick={() => handleClick(index)}
          >
            {card.flipped || card.matched ? card.value : "?"}
          </div>
        ))}
      </div>

      {winner && (
        <div className="winner-overlay">
          <h1>{winner}</h1>
          <button onClick={restartGame}>Play Again</button>
        </div>
      )}
    </div>
  );
}
