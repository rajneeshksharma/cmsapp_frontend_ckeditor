import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { UsersidebarComponent } from './shared/usersidebar/usersidebar.component';
import { UserbreadcrumbComponent } from './shared/userbreadcrumb/userbreadcrumb.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

@NgModule({
  declarations: [
    UserComponent,
    UsersidebarComponent,
    UserbreadcrumbComponent,
    UserdashboardComponent
    ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    FormsModule

  ],
  exports: [
    RouterModule
  ]
})
export class UserModule { }
