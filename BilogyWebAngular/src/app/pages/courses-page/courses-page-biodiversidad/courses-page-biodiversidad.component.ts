import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-courses-page-biodiversidad',
  templateUrl: './courses-page-biodiversidad.component.html',
  styleUrls: ['./courses-page-biodiversidad.component.scss']
})
export class CoursesPageBiodiversidadComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  goBack(){
    this.location.back();
  }

  onClick(){
    this.router.navigate(['/course3details'])
  }

}
