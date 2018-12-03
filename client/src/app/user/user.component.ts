import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { FormsModule} from '@angular/forms'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  theActualuser:any = {}
  theError:any
  signUpUser: any = {}
  loginUser: any = {}




  constructor(private authService: UserServiceService) { }

  tryToSignUp(){
    this.authService.signup(this.signUpUser)
    .subscribe(
      userObjFromApi =>{this.successCallback(userObjFromApi)},
      blahErrorThing =>{this.errorCallback(blahErrorThing)}
    )
  }

  tryToLogIn(){
    this.authService.login(this.loginUser)
    .subscribe(
      res => {this.successCallback(res)},
      err => {this.errorCallback(err)}
    )
  }

  logMeOut(){
    this.authService.logout()
    .subscribe(res => {this.theActualuser = {} })
  }



  successCallback(userObject){
    console.log('=-=-=-=-=-=-=-=-=-=-=-',userObject);
    this.theActualuser = userObject
    this.theError = ''
  }

  errorCallback(errorObject){
    this.theError = errorObject
    this.theActualuser = {username: '', password: ''}
  }


  checkIfLoggedIn(){
    this.authService.isLoggedIn()
    .subscribe(
      res =>{this.successCallback(res)},
      err =>{this.errorCallback(null)}
    )
    
  }

  ngOnInit() {
    this.checkIfLoggedIn()
  }

}
