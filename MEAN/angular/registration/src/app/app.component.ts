import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    user = new User();
    savedUser = new User();
    registered = true;
    constructor(){}

    ngOnInit(){
        console.log(this.user)
    }

    onSubmit(){
        console.log(this.user)
        Object.assign(this.savedUser, this.user);
        this.registered=true;
        console.log(this.savedUser)
    }
}
