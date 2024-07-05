import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/core/global/toast/toast.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
  }

  openModal() {
    this.toastService.show('success', 'This is a success message, this message will disappear in 3 seconds.');
  }

  openModalEdit() {
    this.toastService.show('alert', 'This is a warning message, this message will disappear in 3 seconds.');
  }

}
