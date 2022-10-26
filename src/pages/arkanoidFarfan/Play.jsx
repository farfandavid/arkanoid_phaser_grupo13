import Phaser from "phaser";

class Play extends Phaser.Scene {
  posicionInicialY = 300;
  posicionInicialX = 400;
  constructor(config) {
    super('Play');
  }





  create() {
    this.add.image(this.posicionInicialX, this.posicionInicialY, "background");
  }



  update() {

  }

}

export default Play;