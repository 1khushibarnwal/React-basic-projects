// import { useEffect, useState } from "react";
// import "./index.css";

// const GRID = 20;

// const randomFood = () => ({
//   x: Math.floor(Math.random() * GRID),
//   y: Math.floor(Math.random() * GRID),
// });

// export default function App() {
//   const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
//   const [food, setFood] = useState(randomFood());
//   const [dir, setDir] = useState({ x: 1, y: 0 });
//   const [gameOver, setGameOver] = useState(false);

//   const [score, setScore] = useState(0);

//   const [highScore, setHighScore] = useState(
//     Number(localStorage.getItem("highScore")) || 0,
//   );

//   const restart = () => {
//     setSnake([{ x: 10, y: 10 }]);
//     setFood(randomFood());
//     setDir({ x: 1, y: 0 });
//     setGameOver(false);
//     setScore(0);
//   };

//   const resetHighScore = () => {
//     localStorage.removeItem("highScore");
//     setHighScore(0);
//   };

//   useEffect(() => {
//     const handleKey = (e) => {
//       switch (e.key) {
//         case "ArrowUp":
//           if (dir.y === 0) setDir({ x: 0, y: -1 });
//           break;

//         case "ArrowDown":
//           if (dir.y === 0) setDir({ x: 0, y: 1 });
//           break;

//         case "ArrowLeft":
//           if (dir.x === 0) setDir({ x: -1, y: 0 });
//           break;

//         case "ArrowRight":
//           if (dir.x === 0) setDir({ x: 1, y: 0 });
//           break;
//       }
//     };

//     window.addEventListener("keydown", handleKey);

//     return () => window.removeEventListener("keydown", handleKey);
//   }, [dir]);

//   useEffect(() => {
//     if (gameOver) return;

//     const interval = setInterval(() => {
//       setSnake((prev) => {
//         const head = {
//           x: prev[0].x + dir.x,
//           y: prev[0].y + dir.y,
//         };

//         if (
//           head.x < 0 ||
//           head.y < 0 ||
//           head.x >= GRID ||
//           head.y >= GRID ||
//           prev.some((s) => s.x === head.x && s.y === head.y)
//         ) {
//           setGameOver(true);
//           return prev;
//         }

//         const newSnake = [head, ...prev];

//         if (head.x === food.x && head.y === food.y) {
//           setFood(randomFood());

//           setScore((prevScore) => {
//             const newScore = prevScore + 1;

//             if (newScore > highScore) {
//               setHighScore(newScore);

//               localStorage.setItem("highScore", newScore);
//             }

//             return newScore;
//           });
//         } else {
//           newSnake.pop();
//         }

//         return newSnake;
//       });
//     }, 150);

//     return () => clearInterval(interval);
//   }, [dir, food, gameOver, highScore]);

//   return (
//     <div className="app">
//       <h1>Snake Game</h1>

//       <div className="scores">
//         <h2>Score: {score}</h2>

//         <h2>High Score: {highScore}</h2>
//       </div>

//       <div className="controls">
//         <button onClick={restart}>Restart</button>

//         <button onClick={resetHighScore}>Reset High Score</button>
//       </div>

//       <div className="board">
//         {Array.from({
//           length: GRID * GRID,
//         }).map((_, i) => {
//           const x = i % GRID;

//           const y = Math.floor(i / GRID);

//           const isSnake = snake.some((s) => s.x === x && s.y === y);

//           const isFood = food.x === x && food.y === y;

//           return (
//             <div
//               key={i}
//               className={`cell
//               ${isSnake ? "snake" : ""}
//               ${isFood ? "food" : ""}
//             `}
//             />
//           );
//         })}
//       </div>

//       {gameOver && (
//         <div className="game-over">
//           <h1>GAME OVER</h1>

//           <button onClick={restart}>Play Again</button>
//         </div>
//       )}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import "./index.css";

const GRID = 20;

const randomFood = () => ({
  x: Math.floor(Math.random() * GRID),
  y: Math.floor(Math.random() * GRID),
});

export default function App() {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState(randomFood());
  const [dir, setDir] = useState({ x: 1, y: 0 });

  const [gameOver, setGameOver] = useState(false);
  const [paused, setPaused] = useState(false);

  const [score, setScore] = useState(0);

  const [highScore, setHighScore] = useState(
    Number(localStorage.getItem("highScore")) || 0,
  );

  const restart = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood(randomFood());
    setDir({ x: 1, y: 0 });

    setGameOver(false);
    setPaused(false);

    setScore(0);
  };

  const resetHighScore = () => {
    localStorage.removeItem("highScore");
    setHighScore(0);
  };

  const togglePause = () => {
    if (!gameOver) {
      setPaused((prev) => !prev);
    }
  };

  useEffect(() => {
    const handleKey = (e) => {
      switch (e.key) {
        case "ArrowUp":
          if (dir.y === 0) setDir({ x: 0, y: -1 });
          break;

        case "ArrowDown":
          if (dir.y === 0) setDir({ x: 0, y: 1 });
          break;

        case "ArrowLeft":
          if (dir.x === 0) setDir({ x: -1, y: 0 });
          break;

        case "ArrowRight":
          if (dir.x === 0) setDir({ x: 1, y: 0 });
          break;

        case " ":
          setPaused((prev) => !prev);
          break;
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [dir]);

  useEffect(() => {
    if (gameOver || paused) return;

    const interval = setInterval(() => {
      setSnake((prev) => {
        const head = {
          x: prev[0].x + dir.x,
          y: prev[0].y + dir.y,
        };

        if (
          head.x < 0 ||
          head.y < 0 ||
          head.x >= GRID ||
          head.y >= GRID ||
          prev.some((s) => s.x === head.x && s.y === head.y)
        ) {
          setGameOver(true);
          return prev;
        }

        const newSnake = [head, ...prev];

        if (head.x === food.x && head.y === food.y) {
          setFood(randomFood());

          setScore((prevScore) => {
            const newScore = prevScore + 1;

            if (newScore > highScore) {
              setHighScore(newScore);

              localStorage.setItem("highScore", newScore);
            }

            return newScore;
          });
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [dir, food, gameOver, paused, highScore]);

  return (
    <div className="app">
      <h1>Snake Game</h1>

      <div className="scores">
        <h2>Score: {score}</h2>

        <h2>High Score: {highScore}</h2>
      </div>

      <div className="controls">
        <button onClick={restart}>Restart</button>

        <button onClick={togglePause}>{paused ? "Resume" : "Pause"}</button>

        <button onClick={resetHighScore}>Reset High Score</button>
      </div>

      <div className="board">
        {Array.from({
          length: GRID * GRID,
        }).map((_, i) => {
          const x = i % GRID;

          const y = Math.floor(i / GRID);

          const isSnake = snake.some((s) => s.x === x && s.y === y);

          const isFood = food.x === x && food.y === y;

          return (
            <div
              key={i}
              className={`cell
              ${isSnake ? "snake" : ""}
              ${isFood ? "food" : ""}
            `}
            />
          );
        })}
      </div>

      {paused && !gameOver && (
        <div className="pause-overlay">
          <h1>PAUSED</h1>

          <button onClick={togglePause}>Resume</button>
        </div>
      )}

      {gameOver && (
        <div className="game-over">
          <h1>GAME OVER</h1>

          <button onClick={restart}>Play Again</button>
        </div>
      )}
    </div>
  );
}
