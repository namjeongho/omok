import { STONE, Board } from '../object/Board';

const BLOCK_SIZE = 40;
const STONE_SIZE = 30;
const MARGIN_X = 30;
const MARGIN_Y = 30;

class BoardRenderer {
    constructor(game, board) {
        this.game = game;
        this.board = board;
        this.object = {};

        this.createBoardSprite();
        this.createStoneSprite();
    }

    renderBoard() {
        return this.renderObject(this.object.board);
    }

    renderObject(obj, x, y) {
        if (x === undefined) x = 0;
        if (y === undefined) y = 0;
        return this.game.add.sprite(x + obj.x, y + obj.y, obj.sprite);
    }

    renderStone(col, row, stone) {
        const x = this.object.board.x + MARGIN_X + (col * BLOCK_SIZE) + this.object.stone[stone].x;
        const y = this.object.board.y + MARGIN_Y + (row * BLOCK_SIZE) + this.object.stone[stone].y;
        return this.game.add.sprite(x, y, this.object.stone[stone].sprite);
    }



    createBoardSprite() {
        const width = (this.board.numCol - 1) * BLOCK_SIZE + (MARGIN_X * 2);
        const height = (this.board.numRow - 1) * BLOCK_SIZE + (MARGIN_Y * 2);

        const g = this.game.add.graphics(0, 0);

        g.beginFill(0xDBA000);
        g.drawRect(0, 0, width, height);
        g.endFill();

        g.lineStyle(2, 0x000000, 1);

        let endX = MARGIN_X + (this.board.numCol - 1) * BLOCK_SIZE;
        let endY = MARGIN_Y + (this.board.numRow - 1) * BLOCK_SIZE;
        let x = MARGIN_X;
        let y = MARGIN_Y;

        // Horizontal line
        for (let i = 0; i < this.board.numRow; i++) {
            g.moveTo(MARGIN_X, y);
            g.lineTo(endX, y);
            y += BLOCK_SIZE;
        }

        // Vertical line
        for (let i = 0; i < this.board.numCol; i++) {
            g.moveTo(x, MARGIN_Y);
            g.lineTo(x, endY);
            x += BLOCK_SIZE;
        }

        this.object.board = {};
        this.object.board.x = (this.game.width - width) / 2;
        this.object.board.y = this.object.board.x;
        this.object.board.sprite = g.generateTexture();

        g.destroy();
    }

    createStoneSprite() {
        const g = this.game.add.graphics(0, 0);
        g.beginFill(0xffffff);
        g.drawCircle(STONE_SIZE / 2, STONE_SIZE / 2, STONE_SIZE);
        g.endFill();

        this.object.stone = [];
        this.object.stone[STONE.WHITE] = {};
        this.object.stone[STONE.WHITE].x = -STONE_SIZE / 2;
        this.object.stone[STONE.WHITE].y = -STONE_SIZE / 2;
        this.object.stone[STONE.WHITE].sprite = g.generateTexture();

        g.clear();

        g.beginFill(0x000000);
        g.drawCircle(STONE_SIZE / 2, STONE_SIZE / 2, STONE_SIZE);
        g.endFill();

        this.object.stone[STONE.BLACK] = {};
        this.object.stone[STONE.BLACK].x = -STONE_SIZE / 2;
        this.object.stone[STONE.BLACK].y = -STONE_SIZE / 2;
        this.object.stone[STONE.BLACK].sprite = g.generateTexture();

        g.destroy();
    }

    getPositionFromPixel(x, y) {
        const pos = {};
        x -= this.object.board.x;
        y -= this.object.board.y;

        pos.x = parseInt((x + BLOCK_SIZE / 2) / BLOCK_SIZE - 1);
        pos.y = parseInt((y + BLOCK_SIZE / 2) / BLOCK_SIZE - 1);

        return pos;
    }

}

export default BoardRenderer;