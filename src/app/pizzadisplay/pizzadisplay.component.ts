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

@Component({
  selector: 'app-pizzadisplay',
  templateUrl: './pizzadisplay.component.html',
  styleUrls: ['./pizzadisplay.component.scss'],
})
export class PizzadisplayComponent implements OnInit {
  title = 'AngularMatCrud';
  pizzaList: Pizza[] = [];
  ingredientsList: Ingredient[] = [];

  constructor(public dialog: MatDialog, private api: ApiService) {}

  ngOnInit() {
    this.getAllPizzas();
    this.getAllIngredients();
  }

  openDialog(ingredientsList: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        ingredientsList: ingredientsList,
      },
    });
    console.log(ingredientsList);
    console.log(ingredientsList[0].name);
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.pizzaList.push(result);
    });
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
      },
      error: (err) => {
        alert('Error deleting product');
        console.log(err);
      },
    });
  }
}
