import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B41RoutingModule } from './b41-routing.module';
import { B41Component } from './b41.component';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [B41Component],
  imports: [
    CommonModule,
    B41RoutingModule,
    DragDropModule
  ]
})
export class B41Module { }
