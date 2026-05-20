# 🐍 Neon Snake Game

A modern arcade-style **Snake Game** built with **React**.

Fast, responsive, polished, and built with persistent scoring + pause controls for an actual game-like experience.

---

# ✨ Features

## 🎮 Gameplay

- Smooth snake movement
- Dynamic food spawning
- Collision detection
- Instant restart system
- Pause / Resume support
- Game Over overlay

## 🏆 Scoring System

- Live score tracking
- Persistent **High Score** using browser localStorage
- Reset high-score functionality

## ⌨ Controls

| Key      | Action         |
| -------- | -------------- |
| ↑        | Move Up        |
| ↓        | Move Down      |
| ←        | Move Left      |
| →        | Move Right     |
| Spacebar | Pause / Resume |

## 🎨 UI

- Glassmorphism board design
- Neon glowing snake
- Animated food pulse
- Blur-overlay pause screen
- Full-screen game-over modal
- Responsive control panel

---

# 🛠 Tech Stack

- **React**
- **JavaScript (ES6+)**
- **CSS3**
- **LocalStorage API**

---

# 🚀 Installation

Clone the repository:

```bash
git clone <your-repo-url>
cd snake-game
```

Install dependencies:

```bash
npm install
```

Start development server:

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
snake-game/
 ┣ src/
 ┃ ┣ App.jsx
 ┃ ┣ index.css
 ┃ ┗ main.jsx
 ┣ package.json
 ┗ README.md
```

---

# ⚡ Game Logic Overview

### Movement Engine

The snake updates every fixed interval using React state updates.

### Collision Detection

Checks:

- Wall collisions
- Self collisions
- Food collision

### Persistent High Score

Stored in browser localStorage and restored on reload.

### Pause System

Game loop halts without resetting state.

---

# 📸 Gameplay Preview

<h3>Home Page:</h3>
<img width="681" height="855" alt="image" src="https://github.com/user-attachments/assets/22031c21-66bf-423f-8c8d-c3ef65eb0ea7" />

<h3>Pause Screen:</h3>
<img width="682" height="861" alt="image" src="https://github.com/user-attachments/assets/8c5d1fab-fe8b-419c-aa41-2d46e7fea405" />

<h3>Game Over Screen</h3>
<img width="717" height="852" alt="image" src="https://github.com/user-attachments/assets/a9459720-46af-4ac9-a431-387f62162f3b" />

---

# 🌟 Future Improvements

- Difficulty levels
- Sound effects
- Mobile swipe controls
- Leaderboards
- Themes / skins
- Speed progression mode

---

# 👩‍💻 Author

**Khushi Barnwal**

Built while leveling up React game development skills.

---

# 📜 License

MIT License

---

## Snake responsibly.

Because running into your own tail is still a skill issue.
