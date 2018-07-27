import { Component, OnInit } from '@angular/core';
import {TaskServiceService} from '../services/task-service.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import {Router, Route} from '@angular/router'



@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  theNewTask: any = {}


  constructor(private summonRoute: ActivatedRoute,
    private taskRabbit: TaskServiceService,
    private router: Router
  
  ) { }
  
  createThisTask(){
    this.taskRabbit.makeATask(this.theNewTask)
    .subscribe((responseThingy)=>{
      this.router.navigate([''])
    })
  };


  ngOnInit() {
  }

}
