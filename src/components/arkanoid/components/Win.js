import Phaser from 'phaser';
import { Button } from './BotonRestart';
//import { BotonRestart } from './BotonRestart.js'

export class Win extends Phaser.Scene {

    constructor() {
        super({ key: 'Win' });
        //this.BotonRestart = new BotonRestart(this);
    }

    preload() {
        this.load.image('Ganaste', 'assets/Win.png');
        this.load.image('botonRestart', 'assets/Restart.png');
        //this.BotonRestart.preload();
    }

    create() {
        const actionOnClick = () => {
            this.scene.start('menu');
        }
        this.add.image(400, 225, 'fondo');

        //this.BotonRestart.create();
        this.GanasteImage = this.add.image(400, 125, 'Ganaste');
        let btn1 = new Button(this, 400, 300, 'botonRestart', actionOnClick)
        btn1.onInputOut = () => {
            console.log('Btn1: onInputOut')
        }

    }
}