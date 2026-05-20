# 🧠 Neon Memory Game

A sleek **2-player Memory Card Game** built with **React**.

Flip cards, match pairs, outscore your opponent, and flex your memory like your semester grades depend on it.

---

# ✨ Features

## 🎮 Gameplay

- 2-player turn-based system
- Flip-and-match mechanics
- Automatic turn switching
- Match detection logic
- Winner announcement overlay
- Instant restart system

---

# 🏆 Scoring System

- Live score tracking for both players
- Automatic score updates on successful matches
- Dynamic winner detection
- Draw handling support

---

# 🎨 UI Highlights

- Glassmorphism card design
- Smooth flip interactions
- Floating hover animations
- Blurred game-complete background effect
- Animated winner screen
- Modern neon arcade styling

---

# ⌨ How to Play

1. Player 1 starts.
2. Click a card to reveal it.
3. Click another card:
   - **Match** → earn a point + play again
   - **No match** → cards flip back + next player’s turn

4. Game ends when all pairs are matched.
5. Highest score wins.

---

# 🛠 Tech Stack

- **React**
- **JavaScript (ES6+)**
- **CSS3 Animations**
- **React State Management**

---

# 🚀 Installation

Clone repository:

```bash
git clone <your-repo-url>
cd memory-game
```

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Open:

```bash
http://localhost:5173
```

---

# 📂 Project Structure

```plaintext
memory-game/
 ┣ src/
 ┃ ┣ App.jsx
 ┃ ┣ index.css
 ┃ ┗ main.jsx
 ┣ package.json
 ┗ README.md
```

---

# ⚡ Core Game Logic

## Card Flip State

Tracks whether each card is:

- Hidden
- Flipped
- Permanently matched

---

## Match Validation

Compares selected card values.

If equal:

- Lock cards revealed
- Award point

If not:

- Delay briefly
- Flip back
- Switch turn

---

## Winner Detection

Triggered when all pairs are matched.

Displays:

- Winner overlay
- Draw screen if tied
- Restart prompt

---

# 📸 Gameplay Preview

<h3>Home Page:</h3>
<img width="632" height="847" alt="image" src="https://github.com/user-attachments/assets/5ef2ce98-ab4d-47ae-9117-06315b486a21" />

<h3>Card flipped state:</h3>
<img width="696" height="853" alt="image" src="https://github.com/user-attachments/assets/d04e9630-6b58-4974-a1b8-634168cd29db" />

<h3>Score reading:</h3>
<img width="630" height="867" alt="image" src="https://github.com/user-attachments/assets/63d6d52d-07a3-4a0d-a10a-0aac77ca8a96" />

<h3>Winning message:</h3>
<img width="921" height="863" alt="image" src="https://github.com/user-attachments/assets/9ed3032c-5c2a-4332-8302-9968f6916ff0" />

---

# 🌟 Future Improvements

- Single-player vs AI mode
- Difficulty levels
- Timer challenge mode
- Leaderboard system
- Sound effects
- Card themes / skins

---

# 👩‍💻 Author

**Khushi Barnwal**

Built while upgrading React logic skills and aggressively flipping cards.

---

# 📜 License

MIT License

---

## Memory issue?

Nah. Totally meant to click that wrong card.
