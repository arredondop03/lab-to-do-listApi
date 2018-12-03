import { Injectable } from '@angular/core'; //this makes a service a service and use it after all this declaration 
import { Http, Response } from '@angular/http'; //this allows angular to make a request to naywhere inlcuding localhost3000
import 'rxjs/add/operator/map'; //rxjs this is so we can use observables
import 'rxjs/add/operator/catch'; // ''
import { Observable } from 'rxjs/Rx'; // '' an observable is a asynchronous array = .subscribe



@Injectable({
  providedIn: 'root' //this is optional. This tells thing thin gwhere to look fo stuff
})
export class UserServiceService {

  constructor(private http: Http ) { } //the lower case http = !amateur hour

  handleError(e){ //e comes magically and is whatever the error is.
    console.log(e)
    return Observable.throw(e.json().message)
  }

  signup(user) { //user is what we recieve from the component
    return this.http.post(`http://localhost:3000/api/signup`, user, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError)
  }

  login(user) {
    return this.http.post(`http://localhost:3000/api/login`, user, {withCredentials: true})
    .map(res => res.json())
    .catch(this.handleError)
  }

  logout() {
    return this.http.post(`http://localhost:3000/api/logout`, {} , {withCredentials: true}) //post always requires req.body so we just send an empty object to fill the requirement
    .map(res => res.json())
    .catch(this.handleError)
  }

  isLoggedIn() {  ///this is to check in angular if we are logged In in axpress
    return this.http.get(`http://localhost:3000/api/loggedin`, {withCredentials: true}) //{withCredentials: true} is a magical thing that we use to get access to the database because passport is very high in security
    .map((res) => {
      return JSON.parse((<any>res)._body)
    })
    .catch(this.handleError)
  }


}

