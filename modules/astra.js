import {DiceSystem} from '../../dice-so-nice/api.js';
import {DieAstra} from './die.js';

Hooks.once("init", async function () {
    CONFIG.Dice.terms["a"] = DieAstra;
});

Hooks.on('diceSoNiceRollComplete', (chatMessageID) => {
    let message = game.messages.get(chatMessageID);
    if(message.isAuthor){
        let success = 0;
        let astraRoll = false;
        message.rolls.forEach(roll => {
            roll.dice.forEach(dice => {
                if(dice instanceof DieAstra){
                    astraRoll = true;
                    dice.results.forEach(res => {
                        switch(res.result){
                            case 5:
                                success+=2;
                                break;
                            case 4:
                                sucess++;
                                break;
                            case 1:
                                break;
                            case 2:
                                break;
                            case 3:
                                sucess++;
                                break;
                            case 6:
                                success+=2;
                                break;
                        }
                    });
                    sucess = Math.floor(sucess/2.0);
                }
            });
        });

        if(astraRoll){
            ChatMessage.create({
                content: `<b>Success:</b> ${success}<br>`,
                author: message.author,
                blind: message.blind
            });
        }
    }
});

Hooks.once('diceSoNiceReady', (dice3d) => {
    const system = new DiceSystem("astra", "Astra", "default");
    dice3d.addSystem(system);
    dice3d.addDicePreset({
      type:"da",
      labels:[
        'modules/astra-system/images/empty_bg.png',
        'modules/astra-system/images/empty_bg.png',
        'modules/astra-system/images/HalfStar_bg.png',
		'modules/astra-system/images/HalfStar_bg.png',
        'modules/astra-system/images/Star_bg.png',
        'modules/astra-system/images/Star_bg.png'
      ],
      bumpMaps:[
        'modules/astra-system/images/empty.png',
        'modules/astra-system/images/empty.png',
        'modules/astra-system/images/HalfStar.png',
        'modules/astra-system/images/HalfStar.png',
        'modules/astra-system/images/Star.png',
		'modules/astra-system/images/Star.png'
      ],
      system:"astra"
    });
});
