# Rock Paper Scissors

A browser-based Rock Paper Scissors game built with plain HTML, CSS and JavaScript. Pick your move, the computer picks one at random, and the scoreboard keeps track of who's ahead.

<p align="center">
  <img src="rock.png" alt="Rock" width="90">
  <img src="paper.png" alt="Paper" width="90">
  <img src="scissors.png" alt="Scissors" width="90">
</p>

## Features

- Click rock, paper or scissors to play a round
- Computer opponent picks its move at random
- Live scoreboard for you vs. the computer
- A result message after every round
- No frameworks or build step; it runs in any modern browser

## How to Play

1. Open the game in your browser.
2. Click **rock**, **paper** or **scissors**.
3. The computer makes its choice, and the result appears below the scoreboard.

**Rules:** rock beats scissors, scissors beats paper, paper beats rock. If you both pick the same thing, it's a draw.

## Running Locally

```bash
git clone https://github.com/juskarand/rockpaperscissors.git
cd rockpaperscissors
open index.html
```

On Windows, double-click `index.html` instead. Nothing needs to be installed.

## Project Structure

```
rockpaperscissors/
├── index.html     # Page layout: scoreboard, result message, choice buttons
├── style.css      # Colours, layout and hover effects
├── app.js         # Game logic and score tracking
├── rock.png
├── paper.png
└── scissors.png
```

## How It Works

- `getComputerChoice()` randomly returns `r`, `p` or `s`.
- `game()` joins the player's and computer's choices into a two-letter key (e.g. `rs` = rock vs. scissors) and uses a `switch` to decide the outcome.
- `win()`, `lose()` and `draw()` update the scoreboard and the result message.
- Click listeners on each choice are attached in `main()`.

## Built With

- HTML5
- CSS3 (with the [Asap](https://fonts.google.com/specimen/Asap) font from Google Fonts)
- JavaScript (no libraries)

## Author

**Juskaran**: [@juskarand](https://github.com/juskarand)
