import { Component } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    username = null;
    score = null;
    existingUser = null;
    promise;

  constructor(private _apiServiceService: ApiServiceService){}


calculateScore() {
    this.promise = this._apiServiceService.retrieveUsername(this.username);
    if (this.promise) {
     this.promise.then( (user) => {
       if (user.id) {
         this.existingUser = true;
         this.score = user.public_repos + user.followers;
         console.log(this.score)
       } else {
         this.existingUser = false;
         this.score = null;
       }
       this.username = null;
       console.log(this.username)
     })
     .catch( (err) => {
       this.existingUser = false;
       console.log(err);
     });
   } else {
     this.existingUser = false;
     console.log("this is the last else");
   }
 }
}
