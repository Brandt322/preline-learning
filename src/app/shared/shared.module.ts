import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/layout/main/main.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MainComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
