import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input() id: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  openModal() {

  }
}
