import { Component, OnInit } from '@angular/core';
import { Ingredient } from './pizzacard/ingredients';
import { Pizza } from './pizzacard/pizza';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import { DialogComponent } from './dialog/dialog.component';
import { DialogData } from './dialog/DialogData';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pizzadisplay',
  templateUrl: './pizzadisplay.component.html',
  styleUrls: ['./pizzadisplay.component.scss'],
})
export class PizzadisplayComponent implements OnInit {
  title = 'AngularMatCrud';
  pizzaList: Pizza[] = [];
  ingredientsList: Ingredient[] = [];

  constructor(
    public dialog: MatDialog,
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllPizzas();
    this.getAllIngredients();
  }

  openDialog(ingredientsList: Ingredient[]): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        ingredientsList: ingredientsList,
      },
    });
    console.log(ingredientsList);
    console.log(ingredientsList[0].name);
    dialogRef.afterClosed().subscribe((result: Pizza) => {
      // this.getAllPizzas();
      if (result) {
        this.pizzaList.push(result);
        console.log('Result!');
      }
      console.log(this.pizzaList);
    });
  }

  addIngredient() {
    this.router.navigate(['/ingredientslist']);
  }

  getAllPizzas() {
    this.api.getPizzas().subscribe({
      next: (res) => {
        console.log(res);
        this.pizzaList = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
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

  deletePizza(id: number) {
    this.api.deletePizza(id).subscribe({
      next: (res) => {
        console.log(res);
        alert('Product deleted successfully');
        this.pizzaList = this.pizzaList.filter((res, index) => index !== id);
        console.log(this.pizzaList);
        this.getAllPizzas();
      },
      error: (err) => {
        alert('Error deleting product');
        console.log(err);
      },
    });
  }

  updateEvent(event: string) {
    if (event === 'trigger') {
      this.getAllPizzas();
    }
  }
}
