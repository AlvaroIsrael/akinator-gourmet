import { v4 } from 'uuid';

class Dish {
  id: string;

  name: string;

  trait: string;

  constructor(name: string) {
    this.id = v4();
    this.name = name;
  }

  setTrait(trait: string): void {
    this.trait = trait;
  }
}

export default Dish;
