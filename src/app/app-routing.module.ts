import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerStatementComponent} from './customer-statement/customer-statement.component';



const routes: Routes = [
    {
        path: '',
        component: CustomerStatementComponent

    },
    {
        path: 'FEComp',
        component: CustomerStatementComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
