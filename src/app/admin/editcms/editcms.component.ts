import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/shared/apiservice.service';
import { Message, ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-editcms',
  templateUrl: './editcms.component.html',
  styleUrls: ['./editcms.component.css']
})
export class EditcmsComponent implements OnInit {

  editCmsForm: FormGroup;
  public editorValue: string;
  pageId: any;
  msgs: Message[] = [];
  constructor(private fb: FormBuilder,
    private apiService: ApiserviceService,
    private confirmationService: ConfirmationService,
    private router: Router) {

    this.editCmsForm = fb.group({
      'page_title': ['', [
        Validators.required
      ]],
      'indexvalue': ['', [
        Validators.required
      ]],
    });
  }

  ngOnInit() {
    this.apiService.getEditCmsPageData().subscribe(res => {
      this.editCmsForm.patchValue(res);
      this.editorValue = res.content;
      this.pageId = res._id;
    });
  }
  onSubmit(data) {
    if (this.editCmsForm.valid) {
      this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          const cmspagedata = {
            page_title: data.page_title,
            indexvalue: data.indexvalue,
            content: this.editorValue
          };
          const cmsedit = {
            data: cmspagedata,
            id: this.pageId
          };
          this.apiService.EditCmsPageData(cmsedit).subscribe(
            res => {
              if (res.code === 200) {
                this.msgs = [{ severity: 'success', summary: 'Confirmed', detail: res.message }];
                this.router.navigate(['/admin']);
              } else if (res.code === 201) {
                this.msgs = [{ severity: 'error', summary: 'Error', detail: res.message }];
              } else {
                this.msgs = [{ severity: 'error', summary: 'Error', detail: res.message }];
              }
            }, err => {
              if (err.error.code === 11000) {
                this.msgs = [{ severity: 'error', summary: 'Error', detail: 'index_value allready in use' }];
              } else {
                this.msgs = [{ severity: 'error', summary: 'Error', detail: 'Something went worng try again' }];
              }
            }
          );

        },
        reject: () => {
         console.log('data');
        }
      });

    }
  }
  onReset() {
    this.confirmationService.confirm({
      message: 'Do you want to reset the data?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.apiService.getEditCmsPageData().subscribe(res => {
          this.editCmsForm.patchValue(res);
          this.editorValue = res.content;
          this.pageId = res._id;
          this.msgs = [{ severity: 'success', summary: 'Confirmed', detail: 'Record Reset' }];
        });
      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });
  }

}
