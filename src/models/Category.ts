import { v4 } from 'uuid';
import Dish from './Dish';

class Category {
  id: string;

  name: string;

  dishes: Dish[];

  constructor(name: string) {
    this.id = v4();
    this.name = name;
    this.dishes = [];
  }

  setDish(dish: Dish): void {
    this.dishes.push(dish);
  }

  getDishes(dish: Dish): Dish[] {
    return this.dishes.filter(d => {
      return d.trait === dish.trait;
    });
  }
}

export default Category;
