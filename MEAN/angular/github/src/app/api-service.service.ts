import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";

@Injectable()
export class ApiServiceService {

  constructor(private _http: Http) { }

  retrieveUsername(username){
      if (username) {
            return this._http.get(`https://api.github.com/users/${username}`)
            .map( data => data.json() )
            .toPromise();
          }
        }
  }
