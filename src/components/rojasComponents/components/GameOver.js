import Phaser from 'phaser';
import { RestartButton } from '../components/boton-Restart';

export class GameOver extends Phaser.Scene{

    constructor(){
        super({key:'gameover'});
        this.RestartButton = new RestartButton(this);
    }

    preload(){
        this.load.image('gameover', 'Rojas/img/gameover1.png');
        this.RestartButton.preload();
    }

    create(){
        this.add.image(400,225, 'fondo');
        this.RestartButton.create();
        this.gameoverImage = this.add.image(400, 125, 'gameover');
        this.input.on('pointerdown',() =>{
            this.scene.start('Escena');
        });
    }
}