import log from 'debug';
import readline from 'readline-sync';
import userAnswer from './helpers/utils';
import Game from './services/Game';

const gameStart = () => {
  log.log(`\n
                                        dP/$.
                                        $4$$%
                                      .ee$$ee.
                                   .eF3??????$C$r.        .d$$$$$$$$$$$e.
.zeez$$$$$be..                    JP3F$5'$5K$?K?Je$.     d$$$FCLze.CC?$$$e
    """??$$$$$$$$ee..         .e$$$e$CC$???$$CC3e$$$$.  $$$/$$$$$$$$$.$$$$
           \`"?$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$b $$"$$$$P?CCe$$$$$F
                "?$$$$$$$$$$$$$$  Akinator Gourmet  $$$b$$J?bd$$$$$$$$$F"
                    "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$d$$F"
                       "?$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"...
                           "?$$$$$$$$$$$$$$$$$$$$$$$$$F "$$"$$$$b
                               "?$$$$$$$$$$$$$$$$$$F"     ?$$$$$F
                                    ""????????C"
                                    e$$$$$$$$$$$$.
                                  .$b.CC$????$$F3eF
                                4$bC/%$bdd$b@$Pd??Jbbr
                                 ""?$$$$eeee$$$$F?"`);
  const game = new Game();
  game.setup();

  let keepPlaying = true;

  while (keepPlaying) {
    log.log('\nPense em um prato que gosta!');
    game.play();
    keepPlaying = userAnswer(readline.question('\nContinuar jogando? (s/n) '));
  }

  process.exit(0);
};

gameStart();
