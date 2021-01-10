// Boxes to arrays
const boxes = Array.from(document.getElementsByClassName('box'));

// Get the restart button
const restartBtn = document.getElementById('restartBtn');

// Display Player
const showPlayer = document.getElementById('playText');

// Box Board
const boxBoard = document.getElementById('box-board');

// Current Player
let whoPlaysNow = 'X';

// Play Text
boxes.forEach(box => {
    box.addEventListener('click', clickResult);
})

function clickResult(event) {
    const boxesindex = boxes.indexOf(event.target);
    showPlayer.innerHTML = whoPlaysNow;

    if(whoPlaysNow === 'X'){
        boxes[boxesindex].classList.add('playerX');
        boxes[boxesindex].innerText = whoPlaysNow;
        whoPlaysNow = 'O'
    } else {
        boxes[boxesindex].classList.add('playerO');
        boxes[boxesindex].innerText = whoPlaysNow;
        whoPlaysNow = 'X';
    }
}

// Restart btn events
restartBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
      box.innerText = "";
    });
    boxes.forEach((box, index) => {
        boxesindex = null;
    });
    showPlayer.innerHTML = `Let's Play!!`;
  
    whoPlaysNow = "X";
  });