import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/core/global/toast/toast.service';
import { MachineService } from 'src/app/services/machine/machine.service';
import { MachineResponse, Equipo } from 'src/app/shared/models/machine.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  equipment!: MachineResponse
  equipos!: Equipo[];
  constructor(private toastService: ToastService, private machineService: MachineService) { }

  ngOnInit(): void {
    this.machineService.getMachines(1, '').subscribe(machines => {
      // console.log('machines: ', machines);
      this.equipos = machines.equipos;
    })
  }

  openModal() {
    this.toastService.show('error', 'This is a success message, this message will disappear in 3 seconds.');
  }

  openModalEdit() {
    this.toastService.show('alert', 'This is a warning message, this message will disappear in 3 seconds.');
  }

}
