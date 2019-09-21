/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AfterChildComponent } from './after-child.component';
import { FormsModule } from '@angular/forms';

describe('AfterChildComponent', () => {
  let component: AfterChildComponent;
  let fixture: ComponentFixture<AfterChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AfterChildComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterChildComponent);
    component = fixture.componentInstance;
    component.index = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
