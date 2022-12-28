import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutapageComponent } from './rutapage/rutapage.component';
import { SharedModuloModule } from '../Shared/shared-modulo.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RutapageComponent
  ],
  imports: [
    CommonModule,
    SharedModuloModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    RutapageComponent,
  ],
})
export class PagesModule { }
