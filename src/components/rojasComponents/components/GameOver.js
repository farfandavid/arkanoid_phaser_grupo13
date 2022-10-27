import Phaser from 'phaser';
import { Button } from './example';
import { RestartButton } from '../components/boton-Restart';

export class GameOver extends Phaser.Scene {

    currentScene = null;
    
    constructor(currentScene) {
        super({ key: 'gameover' });
        this.currentScene = currentScene;
        //this.RestartButton = new RestartButton(this);
    }

    preload() {
        this.load.image('gameover', 'Rojas/img/gameover1.png');
        this.load.image('botonRestart', 'Rojas/img/Restart.png');
        //this.RestartButton.preload();
    }

    create() {

        const actionOnClick = () => {
            this.scene.start('Escena')
            //console.log('click')
        }
        this.add.image(400, 225, 'fondo');

        let btn1 = new Button(this, 400, 300, 'botonRestart', actionOnClick)
        btn1.onInputOut = () => {
            console.log('Btn1: onInputOut')
        }
        //this.RestartButton.create();
        this.gameoverImage = this.add.image(400, 125, 'gameover');
        /*this.input.on('pointerdown', () => {
            this.scene.start('Escena');
        });*/


    }
}