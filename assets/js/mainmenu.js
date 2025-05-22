import {typeAll} from "./menu.js"

export function mainmenu(userName) {
    $(".game").html(`
        <h1 class="typewrite" data-text="MARVEL"></h1>
        <h2 class="typewrite" data-text="Memory Matching Game"></h2>
        <h5 class="typewrite" data-text="Welcome ${userName}"></h5>
        <menu class="main-menu">
            <button class="main-menu-btn start-game">Start Game</button>
            <button class="main-menu-btn sound">Sound</button>
            <button class="main-menu-btn background-btn">Background</button>
            <button class="main-menu-btn about-btn">About</button>
            <button class="main-menu-btn leaderboard">Leaderboard</button>
            <button class="main-menu-btn exit">Exit</button>
        </menu>`);
    typeAll()
}

// level menu function
export function startgamemenu() {
    $(".game").html(`
        <menu class="main-menu">
            <button class="main-menu-btn render-page">Easy</button>
            <button class="main-menu-btn render-page">Normal</button>
            <button class="main-menu-btn render-page">Difficult</button>
            <button class="main-menu-btn back">Back</button>
        </menu>`);
}
// About button 
export function aboutOverlay() {
  var overlay = $(`
            <div class="about-overlay">
                <div class="about-content">
                    <h3>About This Game</h3>
                    <p>Welcome, Hero!
Step into the world of Marvel and test your memory.
Flip the cards, find the matches, and uncover heroes.
This game is your chance to train like an Avenger!

How It Works
It’s a memory-matching game with a Marvel twist.
Flip two cards—match pairs to clear the board.
Choose from three levels: Easy, Medium, and Hard.
Each difficulty brings more cards and more fun.

Ready to Begin?
Sharpen your focus and trust your instincts.
Every match gets you closer to victory.
Unleash your memory skills and become a true Avenger!</p>
                    <button class="close-about main-menu-btn">Close</button>
                </div>
            </div>
        `);

  $("body").append(overlay);

  $(".close-about").on("click", function () {
    $(".about-overlay").remove();
  });
}
