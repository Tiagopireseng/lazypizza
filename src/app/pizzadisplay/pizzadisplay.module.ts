import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzadisplayRoutingModule } from './pizzadisplay-routing.module';
import { PizzadisplayComponent } from './pizzadisplay.component';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [PizzadisplayComponent],
  imports: [CommonModule, PizzadisplayRoutingModule, HeaderModule],
})
export class PizzadisplayModule {}
