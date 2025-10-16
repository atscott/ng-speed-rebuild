import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {B44RoutingModule} from './b44-routing.module';
import {B44Component} from './b44.component';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [B44Component],
  imports: [
    CommonModule,
    B44RoutingModule,
    DragDropModule
  ]
})
export class B44Module { }
