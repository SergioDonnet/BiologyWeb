import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-page-seres-vivos',
  templateUrl: './courses-page-seres-vivos.component.html',
  styleUrls: ['./courses-page-seres-vivos.component.scss']
})
export class CoursesPageSeresVivosComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onClick() {
    this.router.navigate(['/home'])
  }

}
