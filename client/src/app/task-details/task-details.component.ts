import { Component, OnInit } from '@angular/core';
import {TaskServiceService} from '../services/task-service.service'
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  theActualTask: any = {}


  constructor(private taskRabbit:TaskServiceService,
  private summonRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.summonRoute.params
    .subscribe((params)=> {
      this.taskRabbit.getJustOneTask(params['id'])
      .subscribe((theTaskFromTaskRabbit)=>{
        this.theActualTask = theTaskFromTaskRabbit
      })
    });
  }

}
