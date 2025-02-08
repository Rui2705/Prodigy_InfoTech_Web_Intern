const board = document.getElementById("board");
        const status = document.getElementById("status");
        let cells = [];
        let currentPlayer = "X";
        let gameState = ["", "", "", "", "", "", "", "", ""];
        
        function createBoard() {
            board.innerHTML = "";
            for (var i = 0; i < 9; i++) {
                var cell = document.createElement("div");
                cell.classList.add("cell");
                cell.dataset.index = i;
                cell.onclick = handleMove;
                board.appendChild(cell);
                cells.push(cell);
            }
        }
        
        function handleMove(event) {
            const index = event.target.dataset.index;
            if (gameState[index] !== "" || checkWinner()) return;
            
            gameState[index] = currentPlayer;
            event.target.textContent = currentPlayer;
            
            if (checkWinner()) {
                status.textContent = `${currentPlayer} Wins!`;
                return;
            }
            
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            status.textContent = `Player ${currentPlayer}'s Turn`;
        }
        
        function checkWinner() {
            var winningCombos = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
                [0, 4, 8], [2, 4, 6]
            ];
            for (var i = 0; i < winningCombos.length; i++) {
                var [a, b, c] = winningCombos[i];
                if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                    return true;
                }
            }
            return false;
        }
        
        function resetGame() {
            gameState = ["", "", "", "", "", "", "", "", ""];
            currentPlayer = "X";
            status.textContent = "Player X's Turn";
            createBoard();
        }
        
        createBoard();
        status.textContent = "Player X's Turn";