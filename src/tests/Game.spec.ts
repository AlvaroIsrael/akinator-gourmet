import Game from '../services/Game';
import Dish from '../models/Dish';
import Category from '../models/Category';

const createGameStub = () => {
  class GuessStub {
    askAboutDishCategory = (category: Category) => {
      return true;
    };

    askAboutDishName = (dish: Dish) => {
      return true;
    };

    askAboutDishTrait = (dish: Dish) => {
      return true;
    };
  }

  return new GuessStub();
};

describe('Guess test', () => {
  it('should be able to instanciate a Game class.', () => {
    const game = new Game();

    expect(game).toBeInstanceOf(Game);
    expect(game.getCategoryList()).toHaveLength(0);
  });

  it('should be able to fill by default a initial cateogryList for the game.', () => {
    const game = new Game();
    game.setup();

    expect(game.getCategoryList()).toHaveLength(2);
  });

  it('should return false if askAboutDishName is called with a false parameter.', () => {
    const stub = createGameStub();
    const dish = new Dish('macarrao');

    jest.spyOn(stub, 'askAboutDishName').mockReturnValueOnce(false);

    const value = stub.askAboutDishName(dish);

    expect(stub.askAboutDishName).toHaveBeenCalledWith(dish);
    expect(value).toBe(false);
  });

  it('should return false if askAboutDishCategory is called with a false parameter.', () => {
    const stub = createGameStub();
    const category = new Category('massa');

    jest.spyOn(stub, 'askAboutDishCategory').mockReturnValueOnce(false);

    const value = stub.askAboutDishCategory(category);

    expect(stub.askAboutDishCategory).toHaveBeenCalledWith(category);
    expect(value).toBe(false);
  });

  it('should return false if askAboutDishTrait is called with a false parameter.', () => {
    const stub = createGameStub();
    const dish = new Dish('macarrao');

    jest.spyOn(stub, 'askAboutDishTrait').mockReturnValueOnce(false);

    const value = stub.askAboutDishTrait(dish);

    expect(stub.askAboutDishTrait).toHaveBeenCalledWith(dish);
    expect(value).toBe(false);
  });
});
