const STONE = {
    NONE: 0,
    BLACK: 1,
    WHITE: 2
};

class Board {
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
        while (_x >= 0 && this.board[y][_x--] == stone) {
            count++;
        }
        _x = x + 1;
        while (_x < this.numCol && this.board[y][_x++] == stone) {
            count++;
        }

        if (count >= 5) return true;


        // 세로 ↑ ↓
        _x = x;
        _y = y;
        count = 0;
        while (_y >= 0 && this.board[_y--][x] == stone) {
            count++;
        }
        _y = y + 1;
        while (_y < this.numRow && this.board[_y++][x] == stone) {
            count++;
        }
        if (count >= 5) return true;

        // 대각선 ↖ ↘
        _x = x;
        _y = y;
        count = 0;
        while (_x >= 0 && _y >= 0 && this.board[_y--][_x--] == stone) {
            count++;
        }
        _x = x + 1;
        _y = y + 1;
        while (_x < this.numCol && _y < this.numRow && this.board[_y++][_x++] == stone) {
            count++;
        }
        if (count >= 5) return true;

        // 대각선 ↗ ↙
        _x = x;
        _y = y;
        count = 0;
        while (_x < this.numCol && _y >= 0 && this.board[_y--][_x++] == stone) {
            count++;
        }
        _x = x - 1;
        _y = y + 1;
        while (_x >= 0 && _y < this.numRow && this.board[_y++][_x--] == stone) {
            count++;
        }
        if (count >= 5) return true;

        return false;
    }

}

export { STONE, Board };