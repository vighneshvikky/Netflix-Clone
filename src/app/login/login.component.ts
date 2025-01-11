declare var google: any;
import { Token } from '@angular/compiler';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
   private router =  inject(Router)
 ngOnInit(): void {
   google.accounts.id.initialize({
    client_id: '1036059869701-hct70tq8gu27bsh9r623ac6ls4hpn6m5.apps.googleusercontent.com',
    callback: (resp: any) => this.handleLogin(resp)
   });
   google.accounts.id.renderButton(document.getElementById('google-btn'), {
    theme: 'filled_blue',
    size: 'large',
    shape: 'rectangle',
    width: 350
   })
 }

private decodeToken(token: string){
  return JSON.parse(atob(token.split(".")[1]))
}

 handleLogin(response: any){
  if(response){
    // decode the token
    const payLoad = this.decodeToken(response.credential);
    // store in session
    sessionStorage.setItem("loggedInUser", JSON.stringify(payLoad))
    // navigate to home/browse
   this.router.navigate(['browse'])
  }
 }
}
