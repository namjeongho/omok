import { STONE, Board } from '../object/Board';
import BoardRenderer from '../renderer/BoardRenderer';

class Battle extends Phaser.State {

    // Route the game to another state. Prepare a set of variables or objects.
    init() { }

    // Load game assets
    preload() {
        console.log('Battle State preload');
        console.log(`width : ${this.game.width}, height: ${this.game.height}`);
        this.game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE; //NO_SCALE EXACT_FIT SHOW_ALL RESIZE USER_SCALE

    }

    // load any assets from the Loader
    create() {
        this.stage.backgroundColor = 0x000000;

        this.boardSize = 10;
        this.board = new Board(this.game, this.boardSize, this.boardSize);
        this.boardRenderer = new BoardRenderer(this.game, this.board);
        this.boardRenderer.renderBoard();
        this.boardRenderer.renderStone(0, 0, STONE.WHITE);
        this.boardRenderer.renderStone(1, 1, STONE.BLACK);

        //this.currentStone = this.boardRenderer.renderStone(1, 0, STONE.WHITE);
        //this.game.input.addMoveCallback(this.pointerMove, this);
        this.game.input.onUp.add(this.pointerReleased, this);

        this.turnStone = STONE.WHITE;
    }

    pointerReleased(pointer) {
        const pos = this.boardRenderer.getPositionFromPixel(pointer.x, pointer.y);
        this.board.placeStone(pos.x, pos.y, this.turnStone);
        this.boardRenderer.renderStone(pos.x, pos.y, this.turnStone);
        if (this.turnStone == STONE.WHITE) this.turnStone = STONE.BLACK;
        else this.turnStone = STONE.WHITE;
    }
    pointerMove(pointer) {
        this.currentStone.x = pointer.x - 15;
        this.currentStone.y = pointer.y - 15;
    }

    //update() {}

}


export default Battle;
