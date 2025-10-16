import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {B48RoutingModule} from './b48-routing.module';
import {B48Component} from './b48.component';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [B48Component],
  imports: [
    CommonModule,
    B48RoutingModule,
    DragDropModule
  ]
})
export class B48Module { }
