import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/shared/apiservice.service';

@Component({
  selector: 'app-usersidebar',
  templateUrl: './usersidebar.component.html',
  styleUrls: ['./usersidebar.component.css']
})
export class UsersidebarComponent implements OnInit {
  cmsPages: any;

  constructor(private apiService: ApiserviceService) { }

  ngOnInit() {
    this.apiService.getAllCmsPages().subscribe(res => {
      console.log(res.data);
      this.cmsPages = res.data;
      this.apiService.sendViewCmsPageData(res.data[0]);
    });
  }
  onClickLink(data) {
    this.apiService.sendViewCmsPageData(data);
  }
}
