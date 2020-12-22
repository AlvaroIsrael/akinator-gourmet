import readline from 'readline-sync';
import userAnswer from '../helpers/utils';

class RootNode {
  /* Hold node states. */
  private question: string;

  private parentNode: RootNode;

  private rightNode: RootNode;

  private leftNode: RootNode;

  private nextNode: boolean;

  public askAbout(): void {
    const answer = userAnswer(readline.question(this.question));
    if (answer) {
      this.rightNode.askAbout();
    } else {
      this.leftNode.askAbout();
    }
  }

  protected setParentNode(parentNode: RootNode, nextNode: boolean): void {
    this.parentNode = parentNode;
    this.nextNode = nextNode;
  }

  protected getParentNode(): RootNode {
    return this.parentNode;
  }

  protected hasNextNode(): boolean {
    return this.nextNode;
  }

  public setQuestion(question: string): void {
    this.question = question;
  }

  public setRight(right: RootNode): void {
    this.rightNode = right;
    right.setParentNode(this, true);
  }

  public setLeft(left: RootNode): void {
    this.leftNode = left;
    left.setParentNode(this, false);
  }
}

export default RootNode;
