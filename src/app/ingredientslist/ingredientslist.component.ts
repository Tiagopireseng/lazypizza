import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Ingredient } from '../pizzadisplay/pizzacard/ingredients';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-ingredientslist',
  templateUrl: './ingredientslist.component.html',
  styleUrls: ['./ingredientslist.component.scss'],
})
export class IngredientslistComponent implements OnInit {
  ingredientsList: Ingredient[] = [];
  ingredient = new FormControl();
  newIngredient: Ingredient = { name: '' };

  constructor(private router: Router, private api: ApiService) {}

  ngOnInit(): void {
    this.getAllIngredients();
  }

  getAllIngredients() {
    this.api.getIngedients().subscribe({
      next: (res) => {
        console.log(res);
        this.ingredientsList = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  addIngredient(ingredient: string) {
    this.newIngredient.name = ingredient;
    console.log(this.newIngredient);
    this.api.postIngedient(this.newIngredient).subscribe({
      next: (res) => {
        console.log(res);
        this.getAllIngredients();
      },
    });
  }
  deleteIngredient(id: number) {
    this.api.deleteIngredient(id).subscribe({
      next: (res) => {
        console.log(res);
        this.getAllIngredients();
      },
    });
  }

  pizzaDisp() {
    this.router.navigate(['/pizzadisplay']);
  }
}
