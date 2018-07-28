import { Component, OnInit } from '@angular/core';
import {TaskServiceService} from '../services/task-service.service'
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import {Router, Route} from '@angular/router'

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  theActualTask:any = {}
  // theUpdatedTask:any = {}
  // targetId:any = 'blah'

  constructor(private summonRoute: ActivatedRoute,
  private taskRabbit: TaskServiceService,
  private router: Router
  ) { }

  theUpdatedTaskObject:any = {};


updateThisTask(){
  // this.targetId = this.theActualTask._id
  this.taskRabbit.editATask(this.theActualTask._id, this.theActualTask)
  .subscribe((responseThingy)=>{
    this.router.navigate(['details/',this.theActualTask._id])

  })
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
