import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-courses-page-arte',
  templateUrl: './courses-page-arte.component.html',
  styleUrls: ['./courses-page-arte.component.scss']
})
export class CoursesPageArteComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigate(['/home'])
  }

  goBack(){
    this.location.back();
  }

}
