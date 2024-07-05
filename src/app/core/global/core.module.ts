import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from './toast/toast.service';
import { ToastComponent } from './toast/toast.component';


@NgModule({
  declarations: [
    ToastComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToastComponent
  ],
  providers: [ToastService]
})
export class CoreModule { }
