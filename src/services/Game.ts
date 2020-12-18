import log from 'debug';
import readline from 'readline-sync';
import userAnswer from '../helpers/utils';
import Dish from '../models/Dish';
import Category from '../models/Category';

class Game {
  private readonly categoryList: Category[];

  constructor() {
    this.categoryList = [];
  }

  setup(): void {
    const massa = new Category('massa');
    const lasanha = new Dish('lasanha');

    const bolo = new Category('bolo');
    const boloDeChololate = new Dish('bolo de chocolate');

    massa.setDish(lasanha);
    bolo.setDish(boloDeChololate);

    this.categoryList.push(massa, bolo);
  }

  askAboutDishCategory = (category: Category): boolean => {
    let answer = readline.question(`Você pensou em ${category.name}? (s/n) `);
    while (answer.trim() === '') {
      answer = readline.question(`Você pensou em ${category.name}? (s/n) `);
    }
    return userAnswer(answer);
  };

  askAboutDishName = (dish: Dish): boolean => {
    let answer = readline.question(`O prato que você pensou é ${dish.name} (s/n) `);
    while (answer.trim() === '') {
      answer = readline.question(`O prato que você pensou é ${dish.name} (s/n) `);
    }
    return userAnswer(answer);
  };

  askAboutDishTrait = (dish: Dish): boolean => {
    let answer = readline.question(`O prato que você pensou é/tem ${dish.trait} (s/n) `);
    while (answer.trim() === '') {
      answer = readline.question(`O prato que você pensou é/tem ${dish.trait} (s/n) `);
    }
    return userAnswer(answer);
  };

  askAboutNewCategory = (): void => {
    let answer = readline.question('A mano, você pensou no quê? ');

    while (answer.trim() === '') {
      answer = readline.question('Nome da categoria do prato não pode estar vazia, digite novamente: ');
    }

    const newCategory = new Category(answer);
    this.categoryList.push(newCategory);
  };

  askAboutNewDish = (dish: Dish, category: Category): number => {
    let answer = readline.question(`A mano, qual prato você pensou? `);

    while (answer.trim() === '') {
      answer = readline.question('Nome do prato não pode estar vazio, digite novamente: ');
    }

    const newDish = new Dish(answer);

    if (!dish) {
      return category.dishes.push(newDish);
    }

    let attribute = readline.question(`${newDish.name} é/tem _____________ mas ${dish.name} não. `);

    while (attribute.trim() === '') {
      attribute = readline.question('Característica não pode estar vazia, digite novamente: ');
      if (attribute !== '') {
        break;
      }
    }

    newDish.setTrait(attribute);
    return category.dishes.push(newDish);
  };

  /* From the category we loop trough all dishes and start asking questions about it's traits. */
  startGuessing(category: Category): void {
    let userAnsweredYes;
    let currentDish: Dish = new Dish('');

    for (let i = 0; i < category.dishes.length; i += 1) {
      const dish = category.dishes[i];

      currentDish = dish;

      if (category.dishes.indexOf(dish) === 0) {
        userAnsweredYes = this.askAboutDishName(dish);

        if (userAnsweredYes) {
          log.log(`Acertei de novo!`);
          return;
        }
      } else {
        userAnsweredYes = this.askAboutDishTrait(dish);
      }

      if (userAnsweredYes) {
        const dishFound = category.getDishes(dish);

        if (dishFound && dishFound.length > 0) {
          for (let j = 0; j < dishFound.length; j += 1) {
            const d = dishFound[j];

            userAnsweredYes = this.askAboutDishName(d);

            if (userAnsweredYes) {
              log.log(`Acertei de novo!`);
              return;
            }
          }
        }
        return;
      }
    }

    this.askAboutNewDish(currentDish, category);
  }

  /* Entrance point for the game. From here onwards we loot trough all previouslly
   * created categories by the setup function and start asking questions. */
  play(): void {
    let userAnsweredYes;

    for (let i = 0; i < this.categoryList.length; i += 1) {
      const category = this.categoryList[i];

      userAnsweredYes = this.askAboutDishCategory(category);

      if (userAnsweredYes) {
        this.startGuessing(category);
        return;
      }
    }

    this.askAboutNewCategory();
  }
}

export default Game;
