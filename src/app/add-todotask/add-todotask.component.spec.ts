import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodotaskComponent } from './add-todotask.component';

describe('AddTodotaskComponent', () => {
  let component: AddTodotaskComponent;
  let fixture: ComponentFixture<AddTodotaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddTodotaskComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodotaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
