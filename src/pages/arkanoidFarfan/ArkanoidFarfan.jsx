import { useState, useEffect } from "react";
import Phaser from "phaser";
//import Preload from "./Preload";
//import Play from "./Play";
import Menu from "./Menu";
import Play from "./Play";

function ArkanoidF() {

  const [listo, setListo] = useState(false);

  useEffect(() => {

    const CONFIGURACION = {
      scale: {
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
        width: 800,
        height: 600
      },
      posicionInicial: { x: 100, y: 50 },
      velocidadInical: -200,
    };

    const Escenas = [Menu, Play];
    const crearEscena = Scene => new Scene(CONFIGURACION);
    const iniciarEscena = () => Escenas.map(crearEscena);

    var config = {
      type: Phaser.AUTO,
      ...CONFIGURACION,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 },
          debug: true
        }
      },
      scene: iniciarEscena()
    };
    const game = new Phaser.Game(config);
    game.events.on("LISTO", setListo);

    return () => {
      setListo(false);
      game.destroy(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listo])

  return (
    <div id="phaser-game"></div>
  );
}

export default ArkanoidF;