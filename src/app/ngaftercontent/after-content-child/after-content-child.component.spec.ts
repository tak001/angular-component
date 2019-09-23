/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AfterContentChildComponent } from './after-content-child.component';

describe('AfterContentChildComponent', () => {
  let component: AfterContentChildComponent;
  let fixture: ComponentFixture<AfterContentChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterContentChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterContentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
