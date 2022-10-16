import { Component, OnInit } from '@angular/core';
import { LoginSergio, LoginSergioService } from 'src/app/services/loginsergio/loginsergio.service';

@Component({
  selector: 'app-about-us-button',
  templateUrl: './about-us-button.component.html',
  styleUrls: ['./about-us-button.component.scss']
})
export class AboutUsButtonComponent implements OnInit {
  loginsergio: LoginSergio []=[];
  constructor(public loginsergioService: LoginSergioService) { }

  ngOnInit(): void {
    this.loginsergioService.loadLoginSergio().then(fbLoginSergio => this.loginsergio =fbLoginSergio);

  }

}
