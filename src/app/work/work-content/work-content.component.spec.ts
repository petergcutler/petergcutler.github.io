import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkContentComponent } from './work-content.component';

describe('WorkContentComponent', () => {
  let component: WorkContentComponent;
  let fixture: ComponentFixture<WorkContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
