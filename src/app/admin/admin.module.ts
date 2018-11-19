import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminsidebarComponent } from './shared/adminsidebar/adminsidebar.component';
import { AdminbreadcrumbComponent } from './shared/adminbreadcrumb/adminbreadcrumb.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdmincmsComponent } from './admincms/admincms.component';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import { AddcmsComponent } from './addcms/addcms.component';
import { CKEditorModule } from 'ngx-ckeditor';
import { EditcmsComponent } from './editcms/editcms.component';
import { ViewcmsComponent } from './viewcms/viewcms.component';
import {ConfirmationService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {KeyFilterModule} from 'primeng/keyfilter';
@NgModule({
  declarations: [AdminComponent,
     AdminsidebarComponent, AdminbreadcrumbComponent, AdmincmsComponent, AddcmsComponent, EditcmsComponent, ViewcmsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    CKEditorModule,
    ButtonModule,
    HttpClientModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule,
    KeyFilterModule
  ],
  exports: [
    RouterModule
  ],
  providers: [ConfirmationService]
})
export class AdminModule { }
