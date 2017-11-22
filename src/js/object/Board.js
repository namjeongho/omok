export const STONE = {
    NONE: 0,
    BLACK: 1,
    WHITE: 2
};

export default class Board {
    constructor(col, row) {
        this.numCol = col;
        this.numRow = row;
        this.board = new Array(col);
        for (let i = 0; i < col; i++) {
            this.board[i] = new Array(row);
            this.board[i].fill(0);
        }
    }

    clear() {
        for (let i = 0; i < this.col; i++) {
            this.board[i].fill(0);
        }
    }

    placeStone(x, y, stone) {
        this.board[y][x] = stone;
    }

    /**
     * Check the game finished.
     * @returns {boolean}
     * @memberof Board
     */
    checkWin(x, y, stone) {
        let _x = x,
            _y = y,
            count = 0;

        // 가로 ← →
        while (this.board[_y][_x - 1] == stone && x > 0) {
            count++;
        }
        while(this.board[_y][_x++] == stone && x<this.numCol){
            count++;
        }
        // 세로 ↑ ↓
        // 대각선 ↖ ↘
        // 대각선 ↗ ↙
        return STONE.NONE;
    }

}