import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private authService:AuthService) { 
  this.formLogin = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })
  }

  ngOnInit():void{
  }

  onSumit(){
    this.authService.login(this.formLogin.value)
    .then(response =>{
      console.log(response);
    })
    .catch(error => console.log(error));
  }

  onClick(){
    this.authService.loginWithGoogle()
    .then(response =>{

    })
    .catch(error => console.log(error));
  }

}


