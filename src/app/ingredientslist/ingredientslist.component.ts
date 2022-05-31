import { Component, OnInit } from '@angular/core';
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

  pizzaDisp() {
    this.router.navigate(['/pizzadisplay']);
  }
}
