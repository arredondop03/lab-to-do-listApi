import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule, Routes} from "@angular/router"

const routes: Routes = [
{path: '', component: ListAllComponent},
{path: 'details/:id', component: TaskDetailsComponent},
{path: 'create',component: CreateTaskComponent },
{path: 'edit/:id', component: EditTaskComponent},
{path: 'delete', component: DeleteTaskComponent},


]




import { AppComponent } from './app.component';
import { ListAllComponent } from './list-all/list-all.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskServiceService } from './services/task-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ListAllComponent,
    CreateTaskComponent,
    EditTaskComponent,
    DeleteTaskComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TaskServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
