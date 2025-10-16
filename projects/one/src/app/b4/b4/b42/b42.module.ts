import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { B42RoutingModule } from './b42-routing.module';
import { B42Component } from './b42.component';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [B42Component],
  imports: [
    CommonModule,
    B42RoutingModule,
    DragDropModule
  ]
})
export class B42Module { }
