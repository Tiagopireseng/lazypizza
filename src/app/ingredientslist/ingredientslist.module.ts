import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientslistRoutingModule } from './ingredientslist-routing.module';
import { IngredientslistComponent } from './ingredientslist.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { HeaderModule } from '../header/header.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [IngredientslistComponent],
  imports: [
    CommonModule,
    IngredientslistRoutingModule,
    HeaderModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class IngredientslistModule {}
