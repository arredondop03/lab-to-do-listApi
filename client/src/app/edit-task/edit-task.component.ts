import { Component, OnInit } from '@angular/core';
import {TaskServiceService} from '../services/task-service.service'
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  theActualTask:any = {}
  theUpdatedTask:any = {}

  constructor(private summonRoute: ActivatedRoute,
  private taskRabbit: TaskServiceService
  ) { }

  theUpdatedTaskObject:any = {};


updateThisTask(){
  this.taskRabbit.editATask(this.theActualTask.id, this.theUpdatedTask)
};






  ngOnInit() {
    this.summonRoute.params
    .subscribe((params)=>{
      this.taskRabbit.getJustOneTask(params['id'])
      .subscribe((theTaskFromTaskRabbit)=>{
        this.theActualTask = theTaskFromTaskRabbit
      })
    })
  }

}
