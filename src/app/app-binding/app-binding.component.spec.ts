import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBindingComponent } from './app-binding.component';

describe('AppBindingComponent', () => {
  let component: AppBindingComponent;
  let fixture: ComponentFixture<AppBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
