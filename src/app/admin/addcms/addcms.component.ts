import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/shared/apiservice.service';
import { ConfirmationService, Message } from 'primeng/api';
@Component({
  selector: 'app-addcms',
  templateUrl: './addcms.component.html',
  styleUrls: ['./addcms.component.css']
})
export class AddcmsComponent implements OnInit {
  addCmsForm: FormGroup;
  msgs: Message[] = [];
  public editorValue: string;
  constructor(private fb: FormBuilder,
    private router: Router,
    private apiService: ApiserviceService,
    private confirmationService: ConfirmationService) {

    this.addCmsForm = fb.group({
      'page_title': ['', [
        Validators.required
      ]],
      'indexvalue': ['', [
        Validators.required
      ]],
    });
  }

  ngOnInit() {
  }
  onSubmit(data) {
    if (this.addCmsForm.valid) {
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
          this.apiService.sendAddNewCmsPageData(cmspagedata).subscribe(
            res => {
              if (res.code === 200) {
                this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Data Added sucessfully' }];
                this.router.navigate(['/admin']);
              } else if (res.code === 208) {
                this.msgs = [{ severity: 'error', summary: 'Error', detail: res.message }];
              }
            }, err => {
              if (err.error.code === 11000) {
                this.msgs = [{ severity: 'error', summary: 'Error', detail: '(** Page title Allready exist **)' }];
              } else if (err.error.code === 208) {
                this.msgs = [{ severity: 'error', summary: 'Error', detail: '(** Page Index_Value Allready in use **)' }];
              } else {
                this.msgs = [{ severity: 'error', summary: 'Error', detail: '(** Something went wrong **)' }];
              }
            }
          );
        },
        reject: () => {
          console.log('data');
        }
      });
    } else {
      this.msgs = [{ severity: 'error', summary: 'Error', detail: '(** Page tiitle/index_value can not be empty **)' }];
    }
  }
}
