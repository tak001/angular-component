/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AfterViewComponent } from './after-view.component';
import { AfterChildComponent } from './after-child/after-child.component';
import { FormsModule } from '@angular/forms';

describe('AfterViewComponent', () => {
  let component: AfterViewComponent;
  let fixture: ComponentFixture<AfterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AfterViewComponent, AfterChildComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
