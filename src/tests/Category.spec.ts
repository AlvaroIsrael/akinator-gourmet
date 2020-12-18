import Category from '../models/Category';
import Dish from '../models/Dish';

describe('Category', () => {
  it('should be able to instantiate a new category.', () => {
    const category = new Category('massa');
    expect(category).toBeInstanceOf(Category);
  });

  it('should be able to add a dish to a category.', () => {
    const macarrao = new Dish('macarrao');
    const category = new Category('massa');

    category.setDish(macarrao);

    expect(category.dishes).toHaveLength(1);
  });

  it('should be able to get a list of dishes from the category', () => {
    const macarrao = new Dish('macarrao');
    const enhoque = new Dish('enhoque');
    const category = new Category('massa');

    category.setDish(macarrao);
    category.setDish(enhoque);

    const dishes = category.getDishes(macarrao);

    expect(dishes).toHaveLength(2);
  });
});
