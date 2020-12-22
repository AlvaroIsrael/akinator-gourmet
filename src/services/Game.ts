import RootNode from '../models/RootNode';
import LeafNode from '../models/LeafNode';

class Game {
  private rootNode: RootNode;

  /* Initial setup for the game. */
  setup(): void {
    const yesLeafNode = new LeafNode();
    yesLeafNode.setDish('Lasanha');
    const noLeafNode = new LeafNode();
    noLeafNode.setDish('Bolo de Chocolate');

    this.rootNode = new RootNode();
    this.rootNode.setQuestion('O prato que você pensou é massa? (s/n) ');
    this.rootNode.setRight(yesLeafNode);
    this.rootNode.setLeft(noLeafNode);
  }

  /* Entrance point for the game. */
  play(): void {
    this.rootNode.askAbout();
  }
}

export default Game;
