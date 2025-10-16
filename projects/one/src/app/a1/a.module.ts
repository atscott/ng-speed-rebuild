import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ARoutingModule } from './a-routing.module';
import {CdkTreeModule} from '@angular/cdk/tree';


@NgModule({
  imports: [
    CommonModule,
    ARoutingModule,
    CdkTreeModule
  ]
})
export class AModule { }
