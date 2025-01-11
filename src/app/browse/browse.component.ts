import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-browse',
  imports: [],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {
auth = inject(AuthService);
name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name
userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture
userEmail = JSON.parse(sessionStorage.getItem("loggedInUser")!).email
signOut(){
  sessionStorage.removeItem("loggedInUser")
  this.auth.signOut();
}
}
