import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTodotaskComponent } from './edit-todotask.component';

describe('EditTodotaskComponent', () => {
  let component: EditTodotaskComponent;
  let fixture: ComponentFixture<EditTodotaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditTodotaskComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTodotaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
