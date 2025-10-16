import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {B47RoutingModule} from './b47-routing.module';
import {B47Component} from './b47.component';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [B47Component],
  imports: [
    CommonModule,
    B47RoutingModule,
    DragDropModule
  ]
})
export class B47Module { }
