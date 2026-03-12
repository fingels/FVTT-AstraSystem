import {DiceSystem} from '../../dice-so-nice/api.js';
import {DieAstra} from './die.js';

Hooks.once("init", async function () {
    CONFIG.Dice.terms["a"] = DieAstra;
});

Hooks.on('diceSoNiceRollComplete', (chatMessageID) => {
    let message = game.messages.get(chatMessageID);
    if(message.isAuthor){
        let defense = 0;
        let focus = 0;
        let success = 0;
        let szRoll = false;
        message.rolls.forEach(roll => {
            roll.dice.forEach(dice => {
                if(dice instanceof DieAstra){
                    szRoll = true;
                    dice.results.forEach(res => {
                        switch(res.result){
                            case 5:
                                defense++;
                                break;
                            case 4:
                                focus+=2;
                                break;
                            case 1:
                                success++;
                                break;
                            case 2:
                                success+=2;
                                break;
                            case 3:
                                focus++;
                                break;
                            case 6:
                                defense++;
                                break;
                        }
                    });
                }
            });
        });

        if(szRoll){
            ChatMessage.create({
                content: `<b>Defense:</b> ${defense}<br><b>Success:</b> ${success}<br><b>Focus:</b> ${focus}`,
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
      type:"ds",
      labels:[
        'modules/astra-system/images/S1.png',
        'modules/astra-system/images/S2.png',
        'modules/astra-system/images/F1.png',
		'modules/astra-system/images/F2.png',
        'modules/astra-system/images/D1_bg.png',
        'modules/astra-system/images/D1_bg.png'
      ],
      bumpMaps:[
        'modules/astra-system/images/S1_bump.png',
        'modules/astra-system/images/S2_bump.png',
        'modules/astra-system/images/F1_bump.png',
        'modules/astra-system/images/F2_bump.png',
        'modules/astra-system/images/D1_bump.png',
		'modules/astra-system/images/D1_bump.png'
      ],
      system:"astra"
    });
});
