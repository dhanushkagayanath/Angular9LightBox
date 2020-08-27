import { NgModule } from '@angular/core';
import { MylightboxComponent } from './mylightbox.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [MylightboxComponent],
  imports: [
    BrowserModule
  ],
  exports: [MylightboxComponent]
})
export class MylightboxModule { }
