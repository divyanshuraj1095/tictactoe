const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
const board = ['', '', '', '', '', '', '', '', ''];

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (board[index] === '' && !checkWinner()) {
            cell.textContent = currentPlayer;
            board[index] = currentPlayer;
            if (checkWinner()) {
                alert(`${currentPlayer} wins!`);
            } else if (board.every(cell => cell !== '')) {
                alert('It\'s a tie!');
            }
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});

function checkWinner() {
    return winningCombinations.some(combination => {
        return combination.every(index => board[index] === currentPlayer);
    });
}