import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auto1Component } from './auto1/auto1.component';
import { Auto2Component } from './auto2/auto2.component';
import { Auto3Component } from './auto3/auto3.component';



@NgModule({
  declarations: [
    Auto1Component,
    Auto2Component,
    Auto3Component,
  ],
  
  imports: [
    CommonModule
  ],

  exports:[
    Auto1Component,
    Auto2Component,
    Auto3Component,
  ],
  
})
export class SharedModuloModule { }
