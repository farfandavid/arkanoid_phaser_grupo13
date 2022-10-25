import Phaser from 'phaser';
import { RestartButton } from '../components/boton-Restart';

export class Win extends Phaser.Scene{

    constructor(){
        super({key:'Win'});
        this.RestartButton = new RestartButton(this);
    }

    preload(){
        this.load.image('Ganaste', 'Rojas/img/Win.png');
        this.RestartButton.preload();
    }

    create(){
        this.add.image(400,225, 'fondo');
        this.RestartButton.create();
        this.GanasteImage = this.add.image(400, 125, 'Ganaste');
        this.input.on('pointerdown',() =>{
            this.scene.start('Escena');
        });
    }
}