import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCategorysComponent } from './view-categorys.component';

describe('ViewCategorysComponent', () => {
  let component: ViewCategorysComponent;
  let fixture: ComponentFixture<ViewCategorysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCategorysComponent]
    });
    fixture = TestBed.createComponent(ViewCategorysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
