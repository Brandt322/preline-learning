import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toastSource = new Subject();
  toastState = this.toastSource.asObservable();

  constructor() { }

  show(type: string, message: string, time: number = 3000) {
    this.toastSource.next({ type, message, time });
  }
}
