import Phaser from "phaser";
import { Button } from "./example";
export class RestartButton {

    constructor(scene) {
        //super(scene)
        //scene.add.existing(this)
        this.relatedScene = scene;
    }

    preload() {
        this.relatedScene.load.image('botonRestart', 'Rojas/img/Restart.png');
    }

    create() {
        this.startButton = this.relatedScene.add.image(400, 350, 'botonRestart');
        this.startButton.on('pointerdown', () => {
            //this.scene.start('Escena');
            console.log('entro');
        });


    }


}