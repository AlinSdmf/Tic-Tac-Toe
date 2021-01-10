// Container selection
const container = document.getElementById('container');

container.innerHTML += `
    <h1 id="playText">Let's Play!</h1>
    <button id="restartBtn" class="waves-effect waves-light btn">Restart Game</button>
`

// Boxes
container.innerHTML += `
    <div id="box-board">
        <div class="box" id="0"></div>
        <div class="box" id="1"></div>
        <div class="box" id="2"></div>
        <div class="box" id="3"></div>
        <div class="box" id="4"></div>
        <div class="box" id="5"></div>
        <div class="box" id="6"></div>
        <div class="box" id="7"></div>
        <div class="box" id="8"></div>
    </div>
    
`
