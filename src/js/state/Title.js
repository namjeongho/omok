class Title extends Phaser.State {
    preload() {
        console.log("Title State preload");

        this.game.time.advancedTiming = true;
    }

    create() {
        console.log("Title State create");

        const text = {};
        this.text = text;
        this.text.startColorList = ["#00ff00", "#0000ff"];
        this.text.startColor = 0;

        text.title = this.game.add.text(this.game.width / 2, this.game.height / 3, 'Omok Battle', {
            fill: "#0000ff"
        });
        text.title.anchor.setTo(0.5, 0.5);
        text.title.angle = 0;

        text.start = this.game.add.text(this.game.width / 2, this.game.height / 4 * 3, 'touch to start', {
            fill: "#00ff00"
        });
        text.start.anchor.setTo(0.5, 0.5);

        this.game.time.events.loop(150, this.updateText, this);
        this.game.input.onTap.add(this.changeState, this);
    }

    changeState() {
        this.game.state.start('Menu');
    }

    updateText() {
        this.text.start.fill = this.text.startColorList[++this.text.startColor % this.text.startColorList.length];
    }

    update() {
        this.text.title.angle += 1;
    }

    render() {
        this.game.debug.text("fps : " + this.game.time.fps, 10, 20, "#ff0000");
    }

    shutdown() {
        console.log('Title State shutdown');
    }
}

export default Title;
