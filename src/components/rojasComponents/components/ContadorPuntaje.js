export class ContadorPuntaje {
    constructor(scene){
        this.relatedScene = scene;
        this.puntaje = 0;
    }

    create(){
        this.puntajeTexto = this.add.text(16, 16, 'Puntaje: 0',{
            fontSize: '20px',
            fill: '#fff',
            fontFamily: 'verdana, arial, sans-serif'
        });
    }

    incrementoPuntos(puntos){
        this.puntaje +=puntos;
        this.puntajeTexto.setText('Puntos: ' + this.puntajeTexto);
    }
}