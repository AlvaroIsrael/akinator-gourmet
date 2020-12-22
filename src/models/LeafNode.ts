import readline from 'readline-sync';
import logger from 'debug';
import userAnswer from '../helpers/utils';
import RootNode from './RootNode';

class LeafNode extends RootNode {
  private dish: string;

  public setDish(dish: string): void {
    this.dish = dish;
  }

  public askAbout(): void {
    const guessedCorrectly = userAnswer(readline.question(`O prato que você pensou é ${this.dish}? (s/n) `));

    if (guessedCorrectly) {
      logger.log(`Acertei de novo, você pensou em ${this.dish}!`);
    } else {
      const newNode = new RootNode();

      let newDish = readline.question('A mano, você pensou no quê? ');

      while (newDish.trim() === '') {
        newDish = readline.question('Nome do prato não pode estar vazio, digite novamente: ');
      }

      let dishTrait = readline.question(`${newDish} é/tem ____________ mas ${this.dish} não: `);

      while (dishTrait.trim() === '') {
        dishTrait = readline.question('Característica não pode estar vazia, digite novamente: ');
        if (dishTrait !== '') {
          break;
        }
      }

      const question = `O prato que você pensou é/tem ${dishTrait}?`;

      const leafNode = new LeafNode();

      /* Othwewise we keep adding more nodes to the tree. */
      leafNode.setDish(newDish);

      if (this.hasNextNode()) {
        this.getParentNode().setRight(newNode);
      } else {
        this.getParentNode().setLeft(newNode);
      }

      newNode.setQuestion(question);
      newNode.setRight(leafNode);
      newNode.setLeft(this);
    }
  }
}

export default LeafNode;
