/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgaftercontentComponent } from './ngaftercontent.component';

describe('NgaftercontentComponent', () => {
  let component: NgaftercontentComponent;
  let fixture: ComponentFixture<NgaftercontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgaftercontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgaftercontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
