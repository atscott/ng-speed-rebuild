import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {B49RoutingModule} from './b49-routing.module';
import {B49Component} from './b49.component';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [B49Component],
  imports: [
    CommonModule,
    B49RoutingModule,
    DragDropModule
  ]
})
export class B49Module { }
