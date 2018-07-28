import { Component, OnInit } from '@angular/core';
import {TaskServiceService} from '../services/task-service.service'
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import {Router, Route} from '@angular/router'

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent implements OnInit {

  theActualTask:any = {}


  constructor(private summonRoute: ActivatedRoute,
    private taskRabbit: TaskServiceService,
    private router: Router
    ) { }

    deleteThisTask(){
      // this.targetId = this.theActualTask._id
      this.taskRabbit.deleteATask(this.theActualTask._id)
      .subscribe((responseThingy)=>{
        this.router.navigate([''])
    
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
