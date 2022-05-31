import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { DialogComponent } from '../dialog/dialog.component';
import { Ingredient } from './ingredients';
import { Pizza } from './pizza';

@Component({
  selector: 'app-pizzacard',
  templateUrl: './pizzacard.component.html',
  styleUrls: ['./pizzacard.component.scss'],
})
export class PizzacardComponent implements OnInit {
  @Input() pizza!: Pizza;
  @Input() ingredientsList: Ingredient[] = [];

  @Output() deletePizzaID = new EventEmitter<number>();
  @Output() Update = new EventEmitter<string>();

  imageUrl: string = '';

  constructor(public dialog: MatDialog, private api: ApiService) {}

  ngOnInit(): void {
    this.imageUrl = this.pizza['imageUrl'];
  }

  deletePizzaIDEvent(value: number) {
    this.deletePizzaID.emit(value);
  }

  deletePizza() {
    this.deletePizzaIDEvent(this.pizza.id);
  }

  updateEvent(value: string) {
    this.Update.emit(value);
  }

  editPizza(ingredientsList: Ingredient[], Pizza: Pizza): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        ingredientsList: ingredientsList,
        Pizza: this.pizza,
      },
    });
    console.log('Edit runing');
    console.log(Pizza);
    dialogRef.afterClosed().subscribe((result) => {
      // Console log result
      this.updateEvent('trigger');
    });
  }
}
