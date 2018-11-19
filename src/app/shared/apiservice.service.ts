import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  URI = 'https://cmsapp-backend.herokuapp.com/api/cms';

  private editCmsPage = new BehaviorSubject<any>(0);
  public myeditCmsPage = this.editCmsPage.asObservable();

  private viewCmsPage = new BehaviorSubject<any>(0);
  public myviewCmsPage = this.viewCmsPage.asObservable();

  getEditCmsPageData(): Observable<any> {
    return this.editCmsPage.asObservable();
  }
  sendEditCmsPageData(data) {
    this.editCmsPage.next(data);
  }
  getViewCmsPageData(): Observable<any> {
    return this.viewCmsPage.asObservable();
  }
  sendViewCmsPageData(data) {
    this.viewCmsPage.next(data);
  }


  constructor(private http: HttpClient) { }

  getAllCmsPages(): Observable<any> {
    return this.http.get(`${this.URI}/getallcms`);
  }
  sendAddNewCmsPageData(data): Observable<any> {
    return this.http.post(`${this.URI}/addcms`, data);
  }
  EditCmsPageData(data): Observable<any> {
    return this.http.put(`${this.URI}/${data.id}`, data.data);
  }
  DeleteCmsPageData(data): Observable<any> {
    return this.http.delete(`${this.URI}/${data}`);
  }

}
