export class RestartButton{

    constructor(scene){
        this.relatedScene = scene;
    }

    preload() {
        this.relatedScene.load.image('botonRestart', 'Rojas/img/Restart.png');
    }

    create(){
        this.startButton = this.relatedScene.add.image(400,300, 'botonRestart');
        this.startButton.on('pointerdown', () => {
            this.scene.start('Escena');
            console.log('entro');
        });
    }
}