import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-course1lesson1page1',
  templateUrl: './course1lesson1page1.component.html',
  styleUrls: ['./course1lesson1page1.component.scss']
})
export class Course1lesson1page1Component implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
  }
  goBack(){
    this.location.back();
  }

}
