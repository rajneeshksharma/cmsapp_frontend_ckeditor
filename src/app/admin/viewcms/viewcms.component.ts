import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/shared/apiservice.service';

@Component({
  selector: 'app-viewcms',
  templateUrl: './viewcms.component.html',
  styleUrls: ['./viewcms.component.css']
})
export class ViewcmsComponent implements OnInit {
 pageTittle: any;
 content: any;
  constructor(private apiService: ApiserviceService) { }

  ngOnInit() {
this.apiService.getViewCmsPageData().subscribe(res => {
this.pageTittle = res.page_title;
this.content = res.content;
});
  }

}
