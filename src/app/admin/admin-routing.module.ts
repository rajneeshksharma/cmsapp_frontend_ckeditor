import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdmincmsComponent } from '../admin/admincms/admincms.component';
import { AddcmsComponent } from '../admin/addcms/addcms.component';
import { EditcmsComponent } from '../admin/editcms/editcms.component';
import { ViewcmsComponent } from '../admin/viewcms/viewcms.component';
const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path : '' , component : AdmincmsComponent  },
      { path : 'addcms' , component : AddcmsComponent  },
      { path : 'editcms' , component : EditcmsComponent },
      { path : 'viewcms' , component : ViewcmsComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminRoutingModule { }
