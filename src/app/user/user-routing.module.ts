import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
        { path : '' , component : UserdashboardComponent },
        // { path : 'aboutus' , component : AboutusComponent },
        // { path : 'contactus', component: ContactusComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserRoutingModule { }
