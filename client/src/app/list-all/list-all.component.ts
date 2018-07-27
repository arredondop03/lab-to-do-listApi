import { Component, OnInit } from '@angular/core';
import {TaskServiceService} from '../services/task-service.service'

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {

  allTheTasks:Array<any>;

  constructor(private taskRabbit:TaskServiceService) { }

  getAllTheTasks(){
    this.taskRabbit.getTasks()
    .subscribe((res)=>{
      this.allTheTasks = res.reverse();
    })


  }


  ngOnInit() {
    this.getAllTheTasks();
  }

}
