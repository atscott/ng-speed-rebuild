import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ARoutingModule } from './a-routing.module';
import { AComponent } from './a.component';
import {CdkTreeModule} from '@angular/cdk/tree';


@NgModule({
  declarations: [AComponent],
  imports: [
    CommonModule,
    ARoutingModule,
    CdkTreeModule
  ]
})
export class AModule { }
