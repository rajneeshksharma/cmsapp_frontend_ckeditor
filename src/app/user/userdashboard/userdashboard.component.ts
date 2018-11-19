import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/shared/apiservice.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  content: any;
  constructor(private apiService: ApiserviceService) { }

  ngOnInit() {
    this.apiService.getViewCmsPageData().subscribe(
      res => { this.content = res.content; }
    );
  }

}
