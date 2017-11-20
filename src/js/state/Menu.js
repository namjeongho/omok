class Menu extends Phaser.State {
    preload() {
        console.log('Menu State preload');
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
