import RootNode from '../models/RootNode';
import LeafNode from '../models/LeafNode';

class Game {
  private rootNode: RootNode;

  /* Initial setup for the game. Here we just add to nodes to the tree and set the states of one of them as 'yes'. */
  setup(): void {
    const yesLeafNode = new LeafNode();
    yesLeafNode.setDish('Lasanha');
    const noLeafNode = new LeafNode();
    noLeafNode.setDish('Bolo de Chocolate');

    this.rootNode = new RootNode();
    this.rootNode.setQuestion('O prato que você pensou é massa? (s/n) ');
    this.rootNode.setYes(yesLeafNode);
    this.rootNode.setNo(noLeafNode);
  }

  /* Entrance point for the game. */
  play(): void {
    this.rootNode.askAbout();
  }
}

export default Game;
