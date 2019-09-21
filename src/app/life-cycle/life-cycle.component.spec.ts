import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleComponent } from './life-cycle.component';
import { ChildComponent } from './child/child.component';
import { AfterViewComponent } from './after-view/after-view.component';
import { AfterChildComponent } from './after-view/after-child/after-child.component';
import { FormsModule } from '@angular/forms';

describe('LifeCycleComponent', () => {
  let component: LifeCycleComponent;
  let fixture: ComponentFixture<LifeCycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LifeCycleComponent, ChildComponent, AfterViewComponent, AfterChildComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
