import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ingredient } from '../pizzadisplay/pizzacard/ingredients';
import { Pizza } from '../pizzadisplay/pizzacard/pizza';

@Injectable({
  providedIn: 'any',
})
export class ApiService {
  pizzaUrl = 'http://localhost:3000/pizza';
  ingredientsUrl = 'http://localhost:3000/ingredients';

  constructor(private http: HttpClient) {}

  getPizzas() {
    return this.http.get<Pizza[]>(this.pizzaUrl);
  }
  getIngedients() {
    return this.http.get<Ingredient[]>(this.ingredientsUrl);
  }

  postPizza(data: Pizza[]) {
    return this.http.post<Pizza[]>(this.pizzaUrl, data);
  }
  postIngedients(data: Ingredient[]) {
    return this.http.post<Ingredient[]>(this.ingredientsUrl, data);
  }
  deletePizza(id: number) {
    return this.http.delete(`${this.pizzaUrl}/${id}`);
  }
  deleteIngredient(id: number) {
    return this.http.delete(`${this.ingredientsUrl}/${id}`);
  }
  putPizza(id: number, data: Pizza) {
    return this.http.put(`${this.pizzaUrl}/${id}`, data);
  }
}
