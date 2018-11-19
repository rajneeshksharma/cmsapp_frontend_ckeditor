import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcmsComponent } from './viewcms.component';

describe('ViewcmsComponent', () => {
  let component: ViewcmsComponent;
  let fixture: ComponentFixture<ViewcmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
