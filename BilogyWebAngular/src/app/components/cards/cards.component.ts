import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() imageUrl?: string;
  @Input() description?: string;
  @Input() showButton: boolean = false;
  @Input() progress: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
