# 🎮 Number Guessing Game

A fun, interactive number guessing game with three difficulty levels. Guess the random number and test your luck!

## Features
- **3 Difficulty Levels**: Easy (1-10, 5 attempts) | Medium (1-50, 4 attempts) | Hard (1-100, 3 attempts)
- **Real-time Feedback**: Instant emoji feedback when your guess is too high or too low
- **Attempt Tracking**: Limited attempts per level for added challenge
- **Input Validation**: Prevents invalid entries and guides users
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Smooth Animations**: Hover effects and button transitions for better UX
- **Win/Lose Conditions**: Clear game-over messages with the correct number revealed

## How to Play
1. Select your difficulty level from the dropdown
2. Enter a number in the valid range
3. Get instant feedback on your guess (📈 Too Low! / 📉 Too High!)
4. Win before your attempts run out!
5. Click "Start Game" to play again

## Live Demo
[Play the game here](https://spectacular-muffin-f58b9e.netlify.app/)

## Technologies
- HTML5
- CSS3 (Responsive Design, Flexbox, Media Queries)
- Vanilla JavaScript (DOM Manipulation, Event Listeners)

## Project Structure
- `index.html` - Game markup and level selection
- `style.css` - Responsive styling with gradient background
- `script.js` - Game logic, input validation, and feedback system

## Future Enhancements
- High score tracking with localStorage
- Sound effects for correct/incorrect guesses
- Leaderboard system across difficulty levels
- Keyboard support (Enter key to submit)
- Difficulty reset button
- Game statistics (wins/losses)
