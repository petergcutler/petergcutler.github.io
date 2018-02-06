import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleHeadingComponent } from './article-heading.component';

describe('ArticleHeadingComponent', () => {
  let component: ArticleHeadingComponent;
  let fixture: ComponentFixture<ArticleHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
