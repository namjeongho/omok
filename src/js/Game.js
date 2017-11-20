import * as states from './state';

export default class Game extends Phaser.Game {
    constructor() {
        super();
        Object.keys(states).forEach(state => this.state.add(state, states[state]));
        console.log('Game construcotr');
    }

    start() {
        this.state.start('Title');
    }
}
