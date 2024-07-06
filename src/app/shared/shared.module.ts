import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/layout/main/main.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { RouterModule } from '@angular/router';
import { DeleteComponent } from './components/utils/modals/delete/delete.component';



@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MainComponent,
    HeaderComponent,
    DeleteComponent
  ]
})
export class SharedModule { }
