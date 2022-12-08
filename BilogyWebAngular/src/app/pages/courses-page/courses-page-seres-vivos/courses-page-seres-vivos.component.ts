import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-courses-page-seres-vivos',
  templateUrl: './courses-page-seres-vivos.component.html',
  styleUrls: ['./courses-page-seres-vivos.component.scss']
})
export class CoursesPageSeresVivosComponent implements OnInit {

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

}
