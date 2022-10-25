import Phaser from "phaser";

class Menu extends Phaser.Scene {

  btn_play = null;

  posicionInicialY = 300;
  posicionInicialX = 400;
  constructor() {
    super("Menu");
  }


  preload() {
    this.load.image('play', 'assets/menu/button_play.png');
    this.load.image('select', 'assets/menu/select_play.png');
    this.load.image('background', 'assets/sky.png');
  }

  create() {
    this.add.image(this.posicionInicialX, this.posicionInicialY, "background");

    this.btn_play = this.add.sprite(400, 200, "play").setInteractive();
    this.btn_play.on('pointerdown', function () {
      console.log("Hola")
    });
  }

  update() {

  }

}

export default Menu;