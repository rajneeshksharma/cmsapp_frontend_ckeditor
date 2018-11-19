import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbreadcrumbComponent } from './adminbreadcrumb.component';

describe('AdminbreadcrumbComponent', () => {
  let component: AdminbreadcrumbComponent;
  let fixture: ComponentFixture<AdminbreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
