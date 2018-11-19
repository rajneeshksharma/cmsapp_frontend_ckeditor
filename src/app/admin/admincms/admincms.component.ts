import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../shared/apiservice.service';
import { Router } from '@angular/router';
import { ConfirmationService, Message } from 'primeng/api';
@Component({
  selector: 'app-admincms',
  templateUrl: './admincms.component.html',
  styleUrls: ['./admincms.component.css']
})
export class AdmincmsComponent implements OnInit {
  cols: any[];
  msgs: Message[] = [];
  constructor(private apiService: ApiserviceService,
    private router: Router,
    private confirmationService: ConfirmationService) { }
  cmspages = [];
  ngOnInit() {
    this.cols = [
      { field: 'Index', header: 'Index' },
      { field: 'page_title', header: 'Page Title' },
      { field: 'action', header: 'Action' }
    ];
    this.apiService.getAllCmsPages().subscribe(res => { this.cmspages = res.data; console.log(res); }, err => { console.error(err); });
  }
  onClickAddNew() {
    this.router.navigate(['/admin/addcms']);
  }
  onCLickOfDeleteButton(user) {
    this.confirmationService.confirm({
      message: 'Do you want to Delete the data?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.apiService.DeleteCmsPageData(user._id).subscribe(
          res => {
            this.cmspages = res.data;
            this.msgs = [{ severity: 'warn', summary: 'Confirmed', detail: 'Record Deleted' }];
          }, err => { console.error(err); }
        );
      },
      reject: () => {
        console.log('data');
      }
    });
  }
  onCLickEditButton(data) {
    this.apiService.sendEditCmsPageData(data);
    this.router.navigate(['/admin/editcms']);
  }
  onCLickViewButton(data) {
    this.apiService.sendViewCmsPageData(data);
    this.router.navigate(['/admin/viewcms']);
  }
}
