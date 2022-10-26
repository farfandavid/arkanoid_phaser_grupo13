import Phaser from "phaser";
import Play from "./Play";

class Menu extends Phaser.Scene {

  btn_play = null;
  play = null;
  scene = null;

  posicionInicialY = 300;
  posicionInicialX = 400;
  constructor() {
    super("Menu");
    this.play = new Play();
  }


  preload() {
    this.load.image('play', 'assets/menu/button_play.png');
    this.load.image('select', 'assets/menu/select_play.png');
    this.load.image('background', 'assets/sky.png');
  }

  create() {
    this.add.image(this.posicionInicialX, this.posicionInicialY, "background");

    this.btn_play = this.add.image(400, 200, "play").setInteractive();

    //this.scene.start("Play");


  }

  update() {

  }

}

export default Menu;