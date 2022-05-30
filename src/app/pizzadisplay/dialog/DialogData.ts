import { Ingredient } from '../pizzacard/ingredients';
import { Pizza } from '../pizzacard/pizza';

export interface DialogData {
  ingredientsList: Ingredient[];
  Pizza: Pizza;
}
