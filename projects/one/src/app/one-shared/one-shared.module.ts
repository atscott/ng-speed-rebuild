import {NgModule} from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {ReactiveFormsModule} from '@angular/forms';
import {CdkTreeModule} from '@angular/cdk/tree';

@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    CdkTreeModule,
    ScrollingModule
  ],
  exports: [
    ReactiveFormsModule,
    ScrollingModule,
    CdkTreeModule
  ]
})
export class OneSharedModule { }
