import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTypeComponent } from './forms-type.component';

describe('FormsTypeComponent', () => {
  let component: FormsTypeComponent;
  let fixture: ComponentFixture<FormsTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
