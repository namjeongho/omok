import { STONE, Board } from '../object/Board';

class Battle extends Phaser.State {
    preload() {
        console.log('Battle State preload');
        this.game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE; //NO_SCALE EXACT_FIT SHOW_ALL RESIZE USER_SCALE
    }
    create() {
        this.boardSize = 10;
        this.board = new Board(this.boardSize, this.boardSize);

        this.stage.backgroundColor = 0x000000;
        this.createBoardLine();
    }
    update() { }


    createBoardLine() {
        const blockSize = 40;
        const margin = 30;
        const boardAreaSize = (this.boardSize - 1) * blockSize + (margin * 2);

        const offset = (this.game.width - boardAreaSize) / 2;

        console.log(`width : ${this.game.width}, height: ${this.game.height}`);

        const g = this.add.graphics(offset, offset);

        g.beginFill(0xDBA000);
        g.drawRect(0, 0, boardAreaSize, boardAreaSize);
        g.endFill();

        g.lineStyle(2, 0x000000, 1);

        // Horizontal line
        for (let i = 0; i < this.boardSize; i++) {
            g.moveTo(margin, margin + i * blockSize);
            g.lineTo(margin + (this.boardSize - 1) * blockSize, margin + i * blockSize);
        }
        // Vertical line
        for (let i = 0; i < this.boardSize; i++) {
            g.moveTo(margin + i * blockSize, margin);
            g.lineTo(margin + i * blockSize, margin + (this.boardSize - 1) * blockSize);
        }

        g.beginFill(0x000000);
        g.drawCircle(margin, margin, 30);
        g.endFill();

        g.beginFill(0xffffff);
        g.lineStyle(1, 0xffffff, 1);
        g.drawCircle(margin + blockSize, margin, 30);
        g.endFill();




    }


}


export default Battle;
