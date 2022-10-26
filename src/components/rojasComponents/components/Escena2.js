import Phaser from 'phaser';


export class Escena2 extends Phaser.Scene{

    constructor(){
        super({key: 'Escena2'});
    }

    preload(){
        this.load.image('fondo', 'Rojas/img/fondo.png');
        this.load.image('platform', 'Rojas/img/player.png');
        this.load.image('pelota', 'Rojas/img/pelota.png');
        this.load.image('bloqueRojo', 'Rojas/img/BloqueRojo.png');
        this.load.image('bloqueCeleste', 'Rojas/img/BloqueCeleste.png');
        this.load.image('bloqueMorado', 'Rojas/img/BloqueMorado.png');
        this.load.image('bloqueNaranja', 'Rojas/img/BloqueNaranja.png');
        this.load.image('bloqueRosado', 'Rojas/img/BloqueRosado.png');

    }

    create(){
        //Con esto gestionaremos las colisiones que se produzcan.
        this.physics.world.setBoundsCollision(true, true, true, false);
        //Se agrega el fondo.
        this.add.image(400,225, 'fondo');
        //creamos la tabla del puntaje y asi visualizarlo.
        //Aqui agregaremos los bloques.
        this.bloques = this.physics.add.staticGroup({
        key: ['bloqueRojo', 'bloqueCeleste','bloqueMorado','bloqueNaranja','bloqueRosado'],
        frameQuantity: 10,
        gridAlign: {
            widht: 10,
            height: 5,
            cellWidth: 67,
            cellHeight: 34,
            x: 100,
            y: 100
        }
    });

}

}
export default Escena2;
