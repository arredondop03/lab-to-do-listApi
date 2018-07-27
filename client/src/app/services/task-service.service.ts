import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private myHttp: Http) { }

getTasks() {
  return this.myHttp.get('http://localhost:3000/api/tasks')
  .map((response) => response.json());
}

makeATask(theNewTask){
  return this.myHttp.post('http://localhost:3000/api/tasks/create', theNewTask)
  .map((response)=> response.json());
}



getJustOneTask(theIdOfTheTask){
  return this.myHttp.get(`http://localhost:3000/api/tasks/${theIdOfTheTask}`)
  .map((res)=> res.json());
}


editATask(theIdOfTheTaskImUpdating, theUpdatedTaskObject){
  return this.myHttp.post(`http://localhost:3000/api/tasks/edit/${theIdOfTheTaskImUpdating}`, theUpdatedTaskObject)
  .map((updateCompleted)=> updateCompleted.json());
}


















}
