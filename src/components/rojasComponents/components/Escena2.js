import Phaser from 'phaser';


export class Escena2 extends Phaser.Scene{

    constructor(){
        super({key: 'Escena2'});
    }

    platforms = null;
    cursors = null;

    

    preload(){
        this.load.image('fondo2', 'Rojas/img/1168051.png');
        this.load.image('platform', 'Rojas/img/player.png');
        this.load.image('pelota2', 'Rojas/img/PlayerLevel2.png');
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
        this.add.image(400,225, 'fondo2');
        //Aqui agregaremos los bloques.
        this.bloques = this.physics.add.staticGroup({
        key: ['bloqueRojo', 'bloqueRosado','bloqueCeleste','bloqueNaranja','bloqueMorado'],
        frameQuantity: 10,
        gridAlign: {
            widht: 10,
            height: 5,
            cellWidth: 77,
            cellHeight: 44,
            x: 70,
            y: 50
        }
    });

        //Se agrega el personaje, sus fisicas y evitamos que caiga por la gravedad.
        this.platforms = this.physics.add.image(400, 400, 'platform').setImmovable();
        this.platforms.body.allowGravity = false;

        this.puntaje = 0;

        this.puntajeNivel2 = this.add.text(10,7, 'Puntos:' + this.puntaje ,{
            fontSize: '20px',
            fill: '#fff',
            fontFamily: 'verdana, arial, sans-serif'
        });

        //Agregamos la pelota con sus fisicas.
        this.ball = this.physics.add.image(400, 370, 'pelota2');

        //Aqui veremos si la pelota esta "pegada" a nuestro player.
        this.ball.setData('pegada', true);


        //Le agregamos la colision a la pelota.
        this.physics.add.collider(this.ball, this.platforms, this.ImpactoPlataforma, null, this);
        this.physics.add.collider(this.ball, this.bloques, this.ImpactoBloque, null, this);
        //Aqui haremos que nuestra pelota pueda colisionar con nuestros bordes.
        this.ball.setCollideWorldBounds(true);
        this.platforms.setCollideWorldBounds(true);

        //Aqui le diremos cuantos rebotes hara al chocar con algo.
        this.ball.setBounce(1);
        //Añadimos movimiento a nuestro personaje con el objeto cursos.
        this.cursors = this.input.keyboard.createCursorKeys();


    }
    //En esta parte veremos si nuestra pelota impacta con los bloques y si es asi los bloques desaparecen. Tambien comprobamos si la cantidad de bloques es 0 entonces se muestra la escena de victoria.
    ImpactoBloque(ball,bloques) {
        bloques.disableBody(true, true);
        this.AumentarPuntaje(10);
        if(this.bloques.countActive() === 0){
            this.ShowWin();
        }
    }
    //Aqui veremos si la pelota colisiono con cierta parte de nuestra plataforma para mandarla en una direccion distinta.
    ImpactoPlataforma(ball, platforms){
        let relativeImpact = ball.x - platforms.x;
        console.log(relativeImpact);
        if(relativeImpact < 0.1 && relativeImpact > -0.1){
            ball.setVelocityX(Phaser.Math.Between(-10, 10))
        }else{
            ball.setVelocityX(8 * relativeImpact);
        }
    }

    AumentarPuntaje(puntos){
        this.puntaje += puntos;
        this.puntajeNivel2.setText('Puntos:' + this.puntaje);

    }



     //En el metodo Update comprobamos que tecla fue presionada para aignarle una velocidad tanto a la pelota como a nuestro personaje y si no se esta presionando ninguna no se mueve.
    //Tambien haremos que la pelota siga la posicion de nuestro personaje hasta que se presione una tecla y salga disparada.
    update(){
        if(this.cursors.left.isDown){
            this.platforms.setVelocityX(-600);
            if(this.ball.getData('pegada')){
                this.ball.setVelocityX(-600);
            }
        }
        else if(this.cursors.right.isDown){
            this.platforms.setVelocityX(600);
            if(this.ball.getData('pegada')){
                this.ball.setVelocityX(600);
            }
        }
        else{
            this.platforms.setVelocityX(0);
            if(this.ball.getData('pegada')){
                this.ball.setVelocityX(0);
            }
        }
        //En esta parte veremos si la tecla(de la flecha hacia arriba) fue presionada, esta lanzara la pelota.
        if(this.cursors.up.isDown){
            this.ball.setVelocity(-75,-300);
            this.ball.setData('pegada', false);
        }
        //Con esta linea de codigo haremos que si la posicion de la pelota es menor al limite del juego se muestre la pantalla de Game Over.
        if (this.ball.y > 500) {
            console.log('fin');
            this.showGameOver();
        }

    }

    showGameOver(){
        this.scene.start('gameover');
    }
    ShowWin(){
        this.scene.start('Win');
    }

}
export default Escena2;