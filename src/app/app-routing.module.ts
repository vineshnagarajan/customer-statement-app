import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrontEndAssignmentComponent} from './front-end-assignment/front-end-assignment.component';



const routes: Routes = [
    {
        path: '',
        component: FrontEndAssignmentComponent

    },
    {
        path: 'FEComp',
        component: FrontEndAssignmentComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
