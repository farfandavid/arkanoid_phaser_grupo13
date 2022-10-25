import React, { useEffect, useState } from 'react';
import Phaser from 'phaser';
import {Escena} from '../components/rojasComponents/components/Escena';
import { GameOver } from '../components/rojasComponents/components/GameOver';
import { Win } from '../components/rojasComponents/components/Win';

function ArkanoidRojas(){

    const [Listo, setListo] = useState(false);

    useEffect(() =>{

        var config = {
            type: Phaser.AUTO,
            width: 800,
            height: 450,
            physics: {
                default: 'arcade',
                arcade: {
                }
            },
            scene:[Escena, GameOver, Win],
            
            scale: {
                autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
              },

        };

        
    var game = new Phaser.Game(config);

    game.events.on("Listo", setListo)

    return ()=>{
        setListo(false);
        game.destroy(true);
    }

},[Listo]);
return (
    <div></div>
  );

}

export default ArkanoidRojas;