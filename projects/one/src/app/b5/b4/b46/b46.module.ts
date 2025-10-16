import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {B46RoutingModule} from './b46-routing.module';
import {B46Component} from './b46.component';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [B46Component],
  imports: [
    CommonModule,
    B46RoutingModule,
    DragDropModule
  ]
})
export class B46Module { }
