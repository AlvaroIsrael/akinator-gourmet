import Dish from '../models/Dish';

describe('Dish', () => {
  it('should be able to instantiate a new dish.', () => {
    const dish = new Dish('macarrao');
    expect(dish).toBeInstanceOf(Dish);
  });

  it('should be able to set a trait of a dish.', () => {
    const dish = new Dish('macarrao');

    dish.setTrait('tem molho');

    expect(dish.trait).toBe('tem molho');
  });
});
