import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFrameComponent } from './work-frame.component';

describe('WorkFrameComponent', () => {
  let component: WorkFrameComponent;
  let fixture: ComponentFixture<WorkFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
