import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ARoutingModule } from './a-routing.module';
import {TreeModule} from 'angular-tree-component';


@NgModule({
  imports: [
    CommonModule,
    ARoutingModule,
    TreeModule.forRoot()
  ]
})
export class AModule { }
