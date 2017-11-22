class Battle extends Phaser.State {
    preload() {
        console.log('Battle State preload');
    }
    create() {
        this.game.input.onTap.add(this.changeState, this);
    }
    update() {}

    changeState() {
        this.game.state.start('Title');
    }
}

export default Menu;
