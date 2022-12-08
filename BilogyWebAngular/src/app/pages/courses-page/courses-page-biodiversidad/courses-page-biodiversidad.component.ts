import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-page-biodiversidad',
  templateUrl: './courses-page-biodiversidad.component.html',
  styleUrls: ['./courses-page-biodiversidad.component.scss']
})
export class CoursesPageBiodiversidadComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onClick() {
    this.router.navigate(['/home'])
  }

}
