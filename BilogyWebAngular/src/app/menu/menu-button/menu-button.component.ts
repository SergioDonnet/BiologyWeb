import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {
  // Este es el nombre del boton
  @Input() name?: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
