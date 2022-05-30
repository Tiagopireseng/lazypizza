import { Ingredient } from './ingredients';

export interface Pizza {
  name: string;
  id: number;
  imageUrl: string;
  ingredients: Ingredient[];
}
