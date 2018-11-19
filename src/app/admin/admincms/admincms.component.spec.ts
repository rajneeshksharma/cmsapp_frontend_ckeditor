import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincmsComponent } from './admincms.component';

describe('AdmincmsComponent', () => {
  let component: AdmincmsComponent;
  let fixture: ComponentFixture<AdmincmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
