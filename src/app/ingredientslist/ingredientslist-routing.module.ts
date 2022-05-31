import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientslistComponent } from './ingredientslist.component';

const routes: Routes = [{ path: '', component: IngredientslistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientslistRoutingModule { }
