import readline from 'readline-sync';
import userAnswer from '../helpers/utils';

class RootNode {
  /* Hold node states. */
  private question: string;

  private parentNode: RootNode;

  private yes: RootNode;

  private no: RootNode;

  private isYes: boolean;

  public askAbout(): void {
    const answer = userAnswer(readline.question(this.question));
    if (answer) {
      this.yes.askAbout();
    } else {
      this.no.askAbout();
    }
  }

  protected setParentNode(parentNode: RootNode, isYes: boolean): void {
    this.parentNode = parentNode;
    this.isYes = isYes;
  }

  protected getParentNode(): RootNode {
    return this.parentNode;
  }

  protected isYesNode(): boolean {
    return this.isYes;
  }

  public setQuestion(question: string): void {
    this.question = question;
  }

  public setYes(yes: RootNode): void {
    this.yes = yes;
    yes.setParentNode(this, true);
  }

  public setNo(no: RootNode): void {
    this.no = no;
    no.setParentNode(this, false);
  }
}

export default RootNode;
